import { auth } from "../bookbuster.js"; // Adjust path if needed (e.g., './bookbuster.js')
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    errorMessage.textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // 1. Try to log in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // 2. If successful, save a flag and redirect
      // (Note: Firebase automatically handles session persistence, but we can redirect now)
      console.log("Logged in as:", userCredential.user.email);
      window.location.href = 'admin-dashboard.html'; // We will create this page next

    } catch (error) {
      // 3. Handle Errors
      console.error(error);
      if(error.code === 'auth/invalid-credential') {
         errorMessage.textContent = 'Incorrect email or password.';
      } else {
         errorMessage.textContent = error.message;
      }
    }
  });
});