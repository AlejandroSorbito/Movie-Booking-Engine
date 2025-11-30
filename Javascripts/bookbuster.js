// bookbuster.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// Add these two imports:
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  // PASTE YOUR REAL KEYS HERE (The ones from your screenshot)
  apiKey: "AIzaSyDeX...", 
  authDomain: "bookbuster-563d8.firebaseapp.com",
  projectId: "bookbuster-563d8",
  storageBucket: "bookbuster-563d8.firebasestorage.app",
  messagingSenderId: "721522888904",
  appId: "1:721522888904:web:08f177413ed3e1971415fd",
  measurementId: "G-870CLNZFDL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth and DB so we can use them in other files
export const auth = getAuth(app);
export const db = getFirestore(app);