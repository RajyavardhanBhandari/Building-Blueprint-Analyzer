document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email matches the pattern
        if (!emailPattern.test(emailValue)) {
            event.preventDefault();  // Stop form submission
            errorMessage.style.display = 'block';  // Show error message
        } else {
            errorMessage.style.display = 'none';  // Hide error message if valid
        }
    });
});
