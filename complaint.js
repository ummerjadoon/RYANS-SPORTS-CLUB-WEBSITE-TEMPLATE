function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide menu
    } else {
        menu.style.display = "block"; // Show menu
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('feedback-form');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const typeSelect = document.getElementById('type');
    const departmentSelect = document.getElementById('department');
    const messageTextarea = document.getElementById('message');

    // Check if there's saved data in local storage and display it if available
    const savedData = JSON.parse(localStorage.getItem('feedbackData'));
    if (savedData) {
        nameInput.value = savedData.name;
        mobileInput.value = savedData.mobile;
        emailInput.value = savedData.email;
        typeSelect.value = savedData.type;
        departmentSelect.value = savedData.department;
        messageTextarea.value = savedData.message;
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const mobile = mobileInput.value.trim();
        const email = emailInput.value.trim();
        const type = typeSelect.value;
        const department = departmentSelect.value;
        const message = messageTextarea.value.trim();

        if (name && mobile && email && message) {
            // Save form data to localStorage
            const feedbackData = {
                name: name,
                mobile: mobile,
                email: email,
                type: type,
                department: department,
                message: message
            };

            localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

            alert(`Thank you for your ${type}. We have received your message.`);

            // Optionally, you can clear the form fields after saving the data
            nameInput.value = '';
            mobileInput.value = '';
            emailInput.value = '';
            messageTextarea.value = '';
        } else {
            alert("Please fill in all fields.");
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

