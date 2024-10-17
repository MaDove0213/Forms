// JavaScript code for form validation

// Prevent form from submitting
const form = document.getElementById('myForm'); 
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    validateInput();
});

// Retrieve the input field value
const inputField = document.getElementById('inputField');
// Regular expression pattern for alphanumeric input
const alphanumericPattern = /^[a-z0-9]+$/i; // Regular expression for alphanumeric input

// Check if the input value matches the pattern
function validateInput() {
    const inputValue = inputField.value;

    if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        displayConfirmationMessage('Input is valid. Form submitted.');
        console.log('Form submitted with value:', inputValue); // Simulate form submission
    } else {
        // Invalid input: display error message
        displayErrorMessage('Input must be alphanumeric.');
    }
}

function displayErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');     
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function displayConfirmationMessage(message) {
    const confirmationMessage = document.getElementById('confirmationMessage');            confirmationMessage.textContent = message;
    confirmationMessage.style.display = 'block';
}