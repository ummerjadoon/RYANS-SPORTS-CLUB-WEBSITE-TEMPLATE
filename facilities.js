
function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide menu
    } else {
        menu.style.display = "block"; // Show menu
    }
}


// OUTDOOR

// document.addEventListener("DOMContentLoaded", function() {
//     // Add fade-in effect to sections
//     const sections = document.querySelectorAll('.fade-in');
    
//     sections.forEach((section, index) => {
//         setTimeout(() => {
//             section.classList.add('fade-in');
//         }, 500 * index);
//     });

//     // Smooth Scroll for navigation links
//     const links = document.querySelectorAll('nav a');
//     links.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             document.getElementById(targetId).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });



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
