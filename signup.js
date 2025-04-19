function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide menu
    } else {
        menu.style.display = "block"; // Show menu
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Form ko submit hone se rokne ke liye
        
        let fullName = document.querySelector("input[type='text']").value.trim();
        let email = document.querySelector("input[type='email']").value.trim();
        let password = document.querySelectorAll("input[type='password']")[0].value;
        let confirmPassword = document.querySelectorAll("input[type='password']")[1].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again!");
        } else {
            alert(`Sign Up Successful!\n\nName: ${fullName}\nEmail: ${email}`);
            this.submit(); // Agar sab kuch sahi ho to form submit ho
        }
    });
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
