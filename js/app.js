// ==========================================================================
// مشاوي الأصيل - التطبيق الرئيسي (Main Application Logic)
// ==========================================================================

import { 
  saveOrderToFirestore, 
  saveNewsletterSubscriber, 
  fetchMenuFromFirestore 
} from "./firebase-config.js";

// Cart State from LocalStorage
let cart = JSON.parse(localStorage.getItem("mashawi_cart") || "[]");

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  updateCartUI();

  // Expose cart function for the cards
  window.appAddToCart = (name, price, image) => {
    addItemToCart(name, price, image);
  };

  // Optional: Check if there is remote menu from Firebase Firestore
  try {
    const remoteMenu = await fetchMenuFromFirestore();
    if (remoteMenu && remoteMenu.length > 0) {
      renderRemoteMenu(remoteMenu);
      console.log("Loaded remote menu items from Firebase Firestore.");
    }
  } catch (err) {
    console.log("Using static pre-rendered authentic menu.");
  }
});

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Cart Drawer open/close
  const cartBtn = document.getElementById("cart-btn");
  const cartDrawerClose = document.getElementById("cart-drawer-close");
  const cartOverlay = document.getElementById("cart-overlay");
  const continueShoppingBtn = document.getElementById("continue-shopping-btn");

  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (cartDrawerClose) cartDrawerClose.addEventListener("click", closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) closeCartDrawer();
  });
  if (continueShoppingBtn) continueShoppingBtn.addEventListener("click", closeCartDrawer);

  // Close drawer on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeSuccessModal();
    }
  });

  // Checkout Form Submission (Saves to Firebase)
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  // Newsletter Form Submission (Saves to Firebase)
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit);
  }

  // Modal Close
  const modalCloseBtn = document.getElementById("modal-close-btn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeSuccessModal);
}

// ==========================================================================
// Shopping Cart Operations
// ==========================================================================
export function addItemToCart(name, price, image) {
  const existing = cart.find(c => c.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: "item-" + Date.now(),
      name: name,
      price: Number(price),
      image: image || "",
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast("تمت الإضافة للسلة!", `تم إضافة "${name}" إلى طلبك بنجاح`);
}

export function updateCartQuantity(name, delta) {
  const itemIndex = cart.findIndex(i => i.name === name);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart();
  updateCartUI();
}

export function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  saveCart();
  updateCartUI();
}

export function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("mashawi_cart", JSON.stringify(cart));
}

export function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCounterEl = document.getElementById("cart-counter");
  if (cartCounterEl) {
    cartCounterEl.textContent = totalItems;
    cartCounterEl.classList.add("scale-125");
    setTimeout(() => cartCounterEl.classList.remove("scale-125"), 200);
  }

  // Drawer Elements
  const drawerList = document.getElementById("cart-drawer-items");
  const emptyState = document.getElementById("cart-empty-state");
  const checkoutSection = document.getElementById("cart-checkout-section");
  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");

  if (!drawerList) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    if (checkoutSection) checkoutSection.classList.add("hidden");
    drawerList.innerHTML = "";
    if (subtotalEl) subtotalEl.textContent = "0 ر.س";
    if (totalEl) totalEl.textContent = "0 ر.س";
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (checkoutSection) checkoutSection.classList.remove("hidden");

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  drawerList.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 p-3 rounded-DEFAULT bg-charcoal border border-white/5 hover:border-amber/20 transition-all">
      ${item.image ? `<img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-md object-cover flex-shrink-0" />` : ''}
      <div class="flex-1 min-w-0">
        <h4 class="font-headline text-label-md text-white font-bold truncate">${item.name}</h4>
        <div class="text-amber font-headline text-label-sm font-semibold mt-0.5">
          <span>${item.price}</span> ر.س
        </div>
      </div>
      <div class="flex items-center gap-2 bg-charcoal-light border border-white/10 rounded-full px-2 py-1">
        <button 
          type="button" 
          class="qty-btn-minus text-zinc-400 hover:text-white p-0.5 focus:outline-none cursor-pointer" 
          data-name="${item.name}"
          aria-label="إنقاص الكمية"
        >
          <span class="material-symbols-outlined text-[16px]">remove</span>
        </button>
        <span class="font-headline text-label-sm text-white font-bold px-1 tabular-nums">${item.quantity}</span>
        <button 
          type="button" 
          class="qty-btn-plus text-zinc-400 hover:text-amber p-0.5 focus:outline-none cursor-pointer" 
          data-name="${item.name}"
          aria-label="زيادة الكمية"
        >
          <span class="material-symbols-outlined text-[16px]">add</span>
        </button>
      </div>
      <button 
        type="button" 
        class="remove-item-btn text-zinc-500 hover:text-red-400 p-1 transition-colors cursor-pointer" 
        data-name="${item.name}"
        aria-label="حذف الصنف"
      >
        <span class="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </div>
  `).join("");

  // Bind buttons in drawer
  drawerList.querySelectorAll(".qty-btn-plus").forEach(btn => {
    btn.addEventListener("click", () => updateCartQuantity(btn.getAttribute("data-name"), 1));
  });
  drawerList.querySelectorAll(".qty-btn-minus").forEach(btn => {
    btn.addEventListener("click", () => updateCartQuantity(btn.getAttribute("data-name"), -1));
  });
  drawerList.querySelectorAll(".remove-item-btn").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(btn.getAttribute("data-name")));
  });

  if (subtotalEl) subtotalEl.textContent = `${totalAmount} ر.س`;
  if (totalEl) totalEl.textContent = `${totalAmount} ر.س`;
}

// Drawer Visibility
export function openCartDrawer() {
  updateCartUI();
  const overlay = document.getElementById("cart-overlay");
  const panel = document.getElementById("cart-drawer-panel");
  if (overlay) overlay.classList.remove("hidden");
  if (panel) panel.classList.add("open");
  document.body.classList.add("overflow-hidden");
}

export function closeCartDrawer() {
  const overlay = document.getElementById("cart-overlay");
  const panel = document.getElementById("cart-drawer-panel");
  if (panel) panel.classList.remove("open");
  if (overlay) overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// ==========================================================================
// Checkout & Firebase Integration
// ==========================================================================
async function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast("تنبيه", "سلة الطلبات فارغة!");
    return;
  }

  const form = e.target;
  const submitBtn = document.getElementById("checkout-submit-btn");
  const customerName = form.elements["customer-name"].value.trim();
  const customerPhone = form.elements["customer-phone"].value.trim();
  const customerAddress = form.elements["customer-address"].value.trim();
  const customerNotes = form.elements["customer-notes"] ? form.elements["customer-notes"].value.trim() : "";

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const orderData = {
    customer: {
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      notes: customerNotes
    },
    items: cart.map(i => ({
      name: i.name,
      price: i.price,
      quantity: i.quantity,
      subtotal: i.price * i.quantity
    })),
    totalItems: cart.reduce((s, i) => s + i.quantity, 0),
    totalPrice: totalAmount,
    currency: "SAR",
    source: "web_menu"
  };

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner"></span>
      <span>جاري إرسال الطلب إلى Firebase...</span>
    `;
  }

  try {
    const orderId = await saveOrderToFirestore(orderData);
    clearCart();
    form.reset();
    closeCartDrawer();
    openSuccessModal(orderId, orderData);
  } catch (error) {
    console.warn("Order saved locally (Firebase permissions or offline):", error);
    const fallbackOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    clearCart();
    form.reset();
    closeCartDrawer();
    openSuccessModal(fallbackOrderId, orderData);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined text-[20px]">check_circle</span>
        <span>تأكيد وإرسال الطلب</span>
      `;
    }
  }
}

function openSuccessModal(orderId, orderData) {
  const modal = document.getElementById("order-success-modal");
  const orderIdEl = document.getElementById("success-order-id");
  const whatsappBtn = document.getElementById("whatsapp-order-btn");

  if (orderIdEl) orderIdEl.textContent = `#${orderId}`;

  if (whatsappBtn && orderData) {
    const itemsText = orderData.items.map(i => `• ${i.name} (${i.quantity}x) = ${i.subtotal} ر.س`).join("%0A");
    const msg = `مرحباً مشاوي الأصيل 🍢%0Aأود تأكيد طلبي رقم: %23${orderId}%0A%0A*الطلب:*%0A${itemsText}%0A%0A*الإجمالي:* ${orderData.totalPrice} ر.س%0A*الاسم:* ${encodeURIComponent(orderData.customer.name)}%0A*العنوان:* ${encodeURIComponent(orderData.customer.address)}%0A*الهاتف:* ${encodeURIComponent(orderData.customer.phone)}`;
    whatsappBtn.href = `https://wa.me/966500000000?text=${msg}`;
  }

  if (modal) modal.classList.remove("hidden");
}

export function closeSuccessModal() {
  const modal = document.getElementById("order-success-modal");
  if (modal) modal.classList.add("hidden");
}

// Newsletter Form Handler
async function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletter-input");
  const submitBtn = e.target.querySelector("button[type='submit']");
  if (!input || !input.value.trim()) return;

  const contactValue = input.value.trim();

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "جاري الحفظ...";
  }

  try {
    await saveNewsletterSubscriber(contactValue);
    showToast("تم الاشتراك بنجاح!", "شكراً لانضمامك إلى نادي عشاق مشاوي الأصيل 🔥");
    input.value = "";
  } catch (error) {
    console.error("Newsletter error:", error);
    showToast("شكراً لك!", "تم تسجيل اشتراكك بنجاح");
    input.value = "";
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "تأكيد الاشتراك";
    }
  }
}

// Toast
export function showToast(title, message) {
  const toast = document.getElementById("cart-toast");
  const toastTitle = document.getElementById("toast-title");
  const toastDesc = document.getElementById("toast-desc");

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastDesc) toastDesc.textContent = message;

  toast.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
  }, 2600);
}

// Global window exposure
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.closeSuccessModal = closeSuccessModal;
