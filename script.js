// Signup form validation (only if form exists)
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();
      const userType = document.querySelector('input[name="userType"]:checked') ? document.querySelector('input[name="userType"]:checked').value : '';
      
      console.log('Signup attempt:', { name, email, password, confirmPassword, userType });
      
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else if (name && email && password && userType) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userType', userType);
        console.log('Signup successful, stored:', { name, email, userType });
        alert('Sign up successful! Redirecting to Sign In.');
        window.location.href = 'login.html';  // Redirect to sign-in dashboard
      } else {
        alert('Please fill all fields.');
      }
    });
  }
  
  // Login form validation (only if form exists)
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const userType = document.querySelector('input[name="userType"]:checked') ? document.querySelector('input[name="userType"]:checked').value : '';
      
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');
      const storedUserType = localStorage.getItem('userType');
      
      console.log('Login attempt:', { email, password, userType });
      console.log('Stored data:', { storedEmail, storedPassword, storedUserType });
      
      if (email === storedEmail && password === storedPassword && userType === storedUserType) {
        alert('Login successful! Redirecting to Menu.');
        window.location.href = 'menu.html';  // Redirect to menu for ordering
      } else {
        alert('Invalid email, password, or user type.');
      }
    });
  }
  
  // Demo login function (for testing)
  function demoLogin(userType) {
    localStorage.setItem('userName', 'Demo User');
    localStorage.setItem('userEmail', 'demo@example.com');
    localStorage.setItem('userPassword', 'demo');
    localStorage.setItem('userType', userType);
    alert('Demo login successful!');
    window.location.href = 'menu.html';  // Redirect to menu
  }
  
  // Simple cart functionality (for menu.html)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  function addToCart(product, price) {
    cart.push({ product, price, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} added to cart!`);
  }