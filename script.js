// ===============================
// Welcome Button Alert
// ===============================

function welcomeMessage() {
    alert(
        "🏔 Welcome to Uttarakhand!\n\nDiscover the beauty of Dev Bhoomi.\nHave a safe and memorable journey!"
    );
}

// ===============================
// Dark / Light Mode
// ===============================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = "☀";
    } else {
        darkBtn.innerHTML = "🌙";
    }

});

// ===============================
// Search Places
// ===============================

const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", function () {

    let value = searchBox.value.toLowerCase();

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = form.querySelector("input[type='text']").value;
    let email = form.querySelector("input[type='email']").value;
    let message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {

        alert("⚠ Please fill all the fields.");

    } else {

        alert("✅ Thank you, " + name + "!\n\nYour message has been sent successfully.");

        form.reset();

    }

});

// ===============================
// Card Hover Animation
// ===============================

cards.forEach(card => {

    card.addEventListener("mouseover", () => {

        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";

    });

    card.addEventListener("mouseout", () => {

        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    });

});

// ===============================
// Greeting Based on Time
// ===============================

window.onload = function () {

    let hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {

        greeting = "🌅 Good Morning!";

    }

    else if (hour < 18) {

        greeting = "☀ Good Afternoon!";

    }

    else {

        greeting = "🌙 Good Evening!";

    }

    setTimeout(() => {

        alert(greeting + "\nWelcome to Explore Uttarakhand!");

    }, 500);

};

// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Gallery Image Click Effect
// ===============================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        alert("📷 " + img.alt + "\nBeautiful place to visit!");

    });

});

// ===============================
// Budget Recommendation
// ===============================

const budgetCards = document.querySelectorAll(".budget-card");

budgetCards.forEach(card => {

    card.addEventListener("click", () => {

        alert(
            "💰 " + card.querySelector("h2").innerText +
            " Package Selected!\nEnjoy your Uttarakhand trip."
        );

    });

});