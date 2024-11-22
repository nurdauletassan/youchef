// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
  menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('open') ? 'true' : 'false');
});

// Close the menu when clicking anywhere inside
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Close menu on mobile after clicking a link
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
function redirectToPage(url) {
  window.location.href = url; // Redirect to the URL passed as an argument
}
