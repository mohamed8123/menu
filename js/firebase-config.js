// ==========================================================================
// Firebase Configuration & Service Initialization
// ==========================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  serverTimestamp, 
  query, 
  orderBy 
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAgUjBSEL59zK7Kru0wA2Mue86bGi4C5mU",
  authDomain: "menu-d603d.firebaseapp.com",
  projectId: "menu-d603d",
  storageBucket: "menu-d603d.firebasestorage.app",
  messagingSenderId: "967166746192",
  appId: "1:967166746192:web:2eb4450e4afad38b6e7b55",
  measurementId: "G-QC18MZJDR3"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Analytics safely (supports both http/https and local file testing)
export let analytics = null;
(async () => {
  try {
    if (await isSupported()) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized successfully.");
    }
  } catch (err) {
    console.warn("Firebase Analytics could not be loaded in current environment:", err.message);
  }
})();

/**
 * Save customer order to Firestore
 * @param {Object} orderData
 * @returns {Promise<string>} Created document ID
 */
export async function saveOrderToFirestore(orderData) {
  try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, {
      ...orderData,
      status: "new",
      createdAt: serverTimestamp(),
      clientTimestamp: new Date().toISOString()
    });
    console.log("Order saved successfully with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving order to Firestore:", error);
    throw error;
  }
}

/**
 * Save newsletter subscriber to Firestore
 * @param {string} contactInfo - Email or phone
 * @returns {Promise<string>}
 */
export async function saveNewsletterSubscriber(contactInfo) {
  try {
    const subRef = collection(db, "subscribers");
    const docRef = await addDoc(subRef, {
      contact: contactInfo,
      subscribedAt: serverTimestamp(),
      source: "menu_footer"
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving subscriber:", error);
    throw error;
  }
}

/**
 * Fetch menu items from Firestore (if available)
 * @returns {Promise<Array>}
 */
export async function fetchMenuFromFirestore() {
  try {
    const menuRef = collection(db, "menu_items");
    const q = query(menuRef, orderBy("category", "asc"));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null; // Return null so app falls back to local rich catalog
    }

    const items = [];
    snapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.warn("Could not fetch remote menu from Firestore, using default menu:", error.message);
    return null;
  }
}
