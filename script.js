const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Basic validation for demonstration
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
    } else {
        document.getElementById("error-message").innerText = "Invalid email or password.";
    }
});




document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate successful message submission
    document.getElementById("success-message").innerText = "Thank you for your message, " + name + "!";
    document.getElementById("contactForm").reset();
});

// Contact Form Validation
function validateContact(event) {
    event.preventDefault();
    let name = document.getElementById('contact-name').value;
    let email = document.getElementById('contact-email').value;
    let message = document.getElementById('contact-message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
    } else {
        alert(`Thank you, ${name}. We have received your message.`);
        document.getElementById("contactForm").reset(); // Reset form fields
    }
}


