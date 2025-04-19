function toggleMenu() {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide menu
    } else {
        menu.style.display = "block"; // Show menu
    }
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;
    const experience = document.querySelector('input[name="experience"]:checked')?.value || "No experience selected";
  
    
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMobile', mobile);
    localStorage.setItem('contactMessage', message);
    localStorage.setItem('contactExperience', experience);
  
    
    alert("Thank you for your feedback! We will respond to your message soon.");
  
    document.getElementById('contact-form').reset();
  });

  document.addEventListener('DOMContentLoaded', () => {
 
    const storedData = JSON.parse(localStorage.getItem('feedbackData'));
    if (storedData) {
        document.getElementById('name').value = storedData.name || '';
        document.getElementById('mobile').value = storedData.mobile || '';
        document.getElementById('email').value = storedData.email || '';
    }

 
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
       
        const name = document.getElementById('name').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;
        const experience = document.querySelector('input[name="experience"]:checked')?.value || '';


        const feedbackData = {
            name: name,
            mobile: mobile,
            email: email,
            experience: experience,
        };

        localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

        
        alert('Your feedback has been saved successfully!');

        form.reset();
    });
});

// Footer Button
document.getElementById("subscribeBtn").addEventListener("click", function () {
    let name = document.getElementById("sub-name").value.trim();
    let email = document.getElementById("sub-email").value.trim();
    let mobile = document.getElementById("sub-mobile").value.trim();

    let mobilePattern = /^03\d{9}$/;
    
    if (name === "" || email === "" || mobile === "") {
        alert("Please fill all fields before submitting!");
    } else if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid Pakistani mobile number (03XX-XXXXXXX).");
    } else {
        alert("Subscription successful!");
        
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