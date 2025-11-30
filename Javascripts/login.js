import { auth } from "../bookbuster.js"; 
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  // --- NEW LOGIC: Check login & handle visibility ---
  if (localStorage.getItem('userLoggedIn') === 'true') {
      // If already logged in, redirect immediately (keep body hidden)
      window.location.href = 'dashboard.html';
  } else {
      // If NOT logged in, show the login page now
      document.body.style.display = "block";
  }
  // --------------------------------------------------

  form.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    errorMessage.textContent = 'Logging in...';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      console.log("Logged in:", userCredential.user.email);
      localStorage.setItem('userLoggedIn', 'true'); 
      window.location.href = 'dashboard.html'; 

    } catch (error) {
      // Alert the error code for easier debugging
      alert(error.code); 
      console.error(error);
      errorMessage.textContent = 'Invalid email or password.';
    }
  }); 
});