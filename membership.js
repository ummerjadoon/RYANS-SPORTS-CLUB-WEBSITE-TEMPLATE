function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
}
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();  
    
    
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const membershipType = document.getElementById("membershipType").value;

    if (fullName === "" || email === "" || phone === "") {
        alert("Please fill out all the required fields!");
        return;
    }

   
    const userData = {
        fullName: fullName,
        email: email,
        phone: phone,
        membershipType: membershipType
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert(`Signup Successful!\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMembership: ${membershipType}`);

    
    document.getElementById("signupMessage").textContent = "Your data has been saved successfully!";

    
    document.getElementById("signupForm").reset(); 
});


document.querySelectorAll(".join-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
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