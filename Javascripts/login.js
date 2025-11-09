document.addEventListener('DOMContentLoaded', function() {
  // Check if user is already logged in (using localStorage for demo purposes - in a real app, use secure server-side sessions)
  if (localStorage.getItem('loggedIn') === 'true') {
    // If logged in, redirect to a dashboard or home page (assuming index.html is the logged-in page)
    window.location.href = 'index.html';
  }

  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Clear previous error
    errorMessage.textContent = '';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // Validate password (minimum 6 characters, for demo)
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long.';
      return;
    }

    // Dummy credentials for demo (in a real app, this would be server-side authentication)
    const validEmail = 'user@bookbuster.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      // Successful login: Store in localStorage (not secure, but for demo)
      localStorage.setItem('loggedIn', 'true');
      // Redirect to home or dashboard
      window.location.href = 'index.html';
    } else {
      errorMessage.textContent = 'Invalid email or password.';
    }
  });
});