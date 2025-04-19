// function toggleMenu() {
//     const menu = document.getElementById("menuList");
//     if (menu.style.display === "block") {
//         menu.style.display = "none"; // Hide menu
//     } else {
//         menu.style.display = "block"; // Show menu
//     }
// }

// function filterImages(category) {
//     const items = document.querySelectorAll('.gallery-item');
    
//     if (category === 'all') {
//         items.forEach(item => item.style.display = 'block');
//     } else {
//         items.forEach(item => {
//             if (item.classList.contains(category)) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     }
// }


function filterImages(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block'; // Show all items
        } else {
            item.style.display = item.classList.contains(category) ? 'block' : 'none';
        }
    });

    // Force layout recalculation to adjust page structure
    document.querySelector('.gallery').offsetHeight;
}




// Footer JS

// document.addEventListener("DOMContentLoaded", function () {
//     let subscribeBtn = document.getElementById("subscribeBtn");
//     let emailInput = document.getElementById("sub-name");

//     if (subscribeBtn && emailInput) {  // Check if elements exist
//         subscribeBtn.addEventListener("click", function () {
//             let email = emailInput.value.trim();
//             let emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Correct Email Validation

//             if (email === "") {
//                 alert("⚠️ Please enter your email before subscribing.");
//             } else if (!emailPattern.test(email)) {
//                 alert("❌ Invalid email format. Please enter a valid email address.");
//             } else {
//                 alert("✅ Thank you for subscribing!");
//                 emailInput.value = ""; // Clear input field
//             }
//         });
//     } else {
//         console.error("⚠️ Error: Subscribe button or input field not found!");
//     }
// });