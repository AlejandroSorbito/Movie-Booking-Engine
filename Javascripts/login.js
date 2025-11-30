// Javascripts/login.js
import { auth } from "../bookbuster.js"; 
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  // Check if user is already logged in
  if (localStorage.getItem('userLoggedIn') === 'true') {
      window.location.href = 'admin-dashboard.html';
  }

  form.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    errorMessage.textContent = 'Logging in...';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Send credentials to Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Success!
      console.log("Logged in:", userCredential.user.email);
      localStorage.setItem('userLoggedIn', 'true'); 
      window.location.href = 'admin-dashboard.html'; 

    } catch (error) {
      // Error handling
      console.error(error);
      errorMessage.textContent = 'Invalid email or password.';
    }
  });
});