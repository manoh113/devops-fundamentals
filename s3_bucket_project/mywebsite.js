// Interactivity for the button in the Features section
document.getElementById('featureButton').addEventListener('click', () => {
    alert('Button Clicked! Welcome to the Features section.');
});

// Form submission logic
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = `Thank you, ${name}! We will contact you shortly at ${email}.`;
    document.getElementById('formMessage').textContent = message;
    this.reset(); // Reset form fields
});
