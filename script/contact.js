// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if fields are empty
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Validate email format
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Success message
  alert(`Thank you, ${name}! Your message has been sent.`);
  document.getElementById("contactForm").reset();
});