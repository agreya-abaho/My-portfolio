// Get the menu button
const menuBtn = document.getElementById("menuBtn");

// Get the navigation links
const navLinks = document.getElementById("navLinks");

// Open and close the menu
menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});

// Close menu after clicking a link
const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});
// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const response = document.getElementById("response");

    response.textContent = "Thank you, " + name +
    "! Your message has been received.";

    contactForm.reset();

});
// Animate skill bars when they appear

const skillSection = document.getElementById("skills");

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            skillBars.forEach(function(bar) {
                bar.classList.add("animate");
            });

            skillObserver.unobserve(skillSection);
        }

    });

}, { threshold: 0.3 });

skillObserver.observe(skillSection);
// Dark and light mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️ Light Mode";

    } else {

        themeBtn.textContent = "🌙 Dark Mode";

    }

});
