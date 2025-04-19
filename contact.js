function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide menu
    } else {
        menu.style.display = "block"; // Show menu
    }
}




document.querySelector(".contact-form form").addEventListener("submit", function (event) {
    event.preventDefault(); // Form ko submit hone se rokne ke liye

    const fullName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    
    if (fullName === "" || email === "" || message === "") {
        alert("Please fill out all the required fields!");
        return;
    }

  
    const contactData = {
        fullName: fullName,
        email: email,
        message: message
    };

    // Save the user data in localStorage
    localStorage.setItem("contactData", JSON.stringify(contactData));

    alert("Your message has been sent successfully!");

   
    this.reset();
});



// Footer JS
document.addEventListener("DOMContentLoaded", function () {
    let subscribeBtn = document.getElementById("subscribeBtn");
    let emailInput = document.getElementById("sub-name");

    if (subscribeBtn && emailInput) {  // Check if elements exist
        subscribeBtn.addEventListener("click", function () {
            let email = emailInput.value.trim();
            let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Correct Email Validation

            if (email === "") {
                alert("⚠️ Please enter your email before subscribing.");
            } else if (!emailPattern.test(email)) {
                alert("❌ Invalid email format. Please enter a valid email address.");
            } else {
                alert("✅ Thank you for subscribing!");
                emailInput.value = ""; // Clear input field
            }
        });
    } else {
        console.error("⚠️ Error: Subscribe button or input field not found!");
    }
});
