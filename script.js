document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset previous errors
    clearErrors();
    
    // Validate inputs
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    
    // If all valid, show success
    if (nameValid && emailValid && messageValid) {
        showSuccess();
    }
});

function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim();
    
    if (nameValue === '') {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('error');
        return false;
    }
    
    // Check for special characters (optional)
    const regex = /^[a-zA-Z\s'-]+$/;
    if (!regex.test(nameValue)) {
        nameError.textContent = 'Name contains invalid characters';
        nameInput.classList.add('error');
        return false;
    }
    
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value.trim();
    
    if (emailValue === '') {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('error');
        return false;
    }
    
    // Email regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        return false;
    }
    
    return true;
}

function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    const messageValue = messageInput.value.trim();
    
    if (messageValue === '') {
        messageError.textContent = 'Message is required';
        messageInput.classList.add('error');
        return false;
    }
    
    return true;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
    
    const errorInputs = document.querySelectorAll('.error');
    errorInputs.forEach(input => input.classList.remove('error'));
}

function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.style.display = 'block';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}