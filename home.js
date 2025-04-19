function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
}

function toggleMenu() {
    const menu = document.getElementById("menuList");
    menu.classList.toggle("active");
}



// Card
document.querySelectorAll('.card').forEach(card => {
    let imgSrc = card.getAttribute('data-image');
    if (imgSrc) {
        card.style.setProperty('--image-url', `url(${imgSrc})`);
        card.style.setProperty('position', 'relative');
        card.style.setProperty('overflow', 'hidden');

        let bgImage = document.createElement('div');
        bgImage.style.position = 'absolute';
        bgImage.style.top = '0';
        bgImage.style.left = '0';
        bgImage.style.width = '100%';
        bgImage.style.height = '100%';
        bgImage.style.backgroundImage = `url(${imgSrc})`;
        bgImage.style.backgroundSize = 'cover';
        bgImage.style.backgroundPosition = 'center';
        bgImage.style.opacity = '0';
        bgImage.style.transition = 'opacity 0.5s ease-in-out';
        bgImage.style.borderRadius = '10px';

        card.appendChild(bgImage);

        card.addEventListener('mouseenter', () => {
            bgImage.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            bgImage.style.opacity = '0';
        });
    }
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
