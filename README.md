# 🍢 مشروع مطعم مشاوي الأصيل - Mashawi Al-Aseel

تم تنظيم وربط المشروع بالكامل وفق أفضل المعايير البرمجية:
فصل ملفات **HTML** و **CSS** و **JavaScript** وربطها بقاعدة بيانات **Firebase Firestore** و **Firebase Analytics**.

---

## 📁 هيكل الملفات المنظم (Project Structure)

```text
mmm/
├── index.html                   # صفحة الموقع الرئيسية
├── تشغيل_الموقع.bat              # تشغيل الموقع بسيرفر محلي بنقرة واحدة
├── css/
│   └── style.css                # ملف التنسيقات والمؤثرات البصرية وحركات السلة
├── js/
│   ├── firebase-config.js       # إعدادات وتهيئة Firebase و Firestore
│   ├── menu-data.js             # بيانات أطباق وقائمة الطعام
│   └── app.js                   # المنطق البرمجي (السلة، التصفية، إرسال الطلبات لفايربيز)
└── README.md                    # هذا الدليل التوضيحي
```

---

## 🔗 كيف تم ربط الملفات ببعضها؟

### 1. ربط ملف الـ CSS بـ HTML:
تم ربطه داخل وسام `<head>` في `index.html`:
```html
<link rel="stylesheet" href="css/style.css">
```

### 2. ربط ملف الـ JavaScript بـ HTML:
تم ربطه في نهاية `<body>` في `index.html` كنظام وحدات **ES Modules**:
```html
<script type="module" src="js/app.js"></script>
```

### 3. ربط Firebase بالـ JavaScript:
في ملف `js/firebase-config.js` يتم استيراد حزم Firebase وتصدير قاعدة البيانات ودوال حفظ الطلبات:
```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```
وفي ملف `js/app.js` يتم استدعاء الدوال للتعامل مع قاعدة البيانات:
```javascript
import { saveOrderToFirestore, saveNewsletterSubscriber } from "./firebase-config.js";
```

---

## 🔥 مميزات الربط مع Firebase المضافة:

1. **إرسال وحفظ الطلبات (Orders Collection):**
   - عند قيام العميل باختيار الأطباق والضغط على **تأكيد وإرسال الطلب** في سلة الشراء.
   - يتم حفظ تفاصيل العميل (الاسم، الهاتف، العنوان، الملاحظات) وقائمة الأصناف والمجموع وتاريخ وتوقيت الطلب مباشرة داخل مجموعة `orders` في Firebase Firestore.
   - يظهر للعميل رقم الطلب الفرعي (Order ID) مع زر مباشر لإرسال ملخص الطلب عبر واتساب.

2. **النشرة البريدية (Subscribers Collection):**
   - النموذج الموجود أسفل الموقع (Footer) مربوط مباشرة بـ Firestore في مجموعة `subscribers`.

3. **التحليلات (Firebase Analytics):**
   - تم تفعيل خدمة `getAnalytics(app)` لمتابعة زيارات وتفاعل المستخدمين.

---

## 🚀 كيفية تشغيل الموقع:

### الطريقة الأولى (الأسهل بنقرة واحدة):
- اضغط نقرتين مزدوجتين على ملف **`تشغيل_الموقع.bat`**.
- سيقوم تلقائياً بتشغيل سيرفر محلي وفتح الموقع في متصفحك على الرابط: `http://localhost:8080`.

### الطريقة الثانية (عبر VS Code):
- افتح المجلد في برنامج **VS Code**.
- اضغط كليك يمين على `index.html` واختر **Open with Live Server**.
