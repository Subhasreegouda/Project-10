// Script for form validation
document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    // Basic form validation
    if (name === '' || email === '' || phone === '' || country === '') {
        alert('All fields are required!');
        return;
    }

    // If validation passes, display a success message
    alert('Login successful! You can now complete your application or check your status');
    document.getElementById('lead-form').reset(); // Clear the form fields
});
