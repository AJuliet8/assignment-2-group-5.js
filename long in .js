
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Get the username and password values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    


    // Perform login validation (dummy validation for demonstration)
    if (username === 'admin' && password === 'password') {
      document.getElementById('loginMessage').innerText = 'Login successful!';
    } else {
      document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
  });

  


