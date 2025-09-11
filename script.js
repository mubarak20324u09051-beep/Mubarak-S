// Smooth scroll to section

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}

// Contact form submission (dummy)

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you for contacting me! I'll get back to you soon.");

  this.reset();

});