// bookbuster.js

// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeX...", // (Keep your actual keys here)
  authDomain: "bookbuster-563d8.firebaseapp.com",
  projectId: "bookbuster-563d8",
  storageBucket: "bookbuster-563d8.firebasestorage.app",
  messagingSenderId: "721522888904",
  appId: "1:721522888904:web:08f177413ed3e1971415fd",
  measurementId: "G-870CLNZFDL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);