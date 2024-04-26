const navToggle = document.querySelector('.nav-toogle');
const navLinks = document.querySelectorAll('.nav__link');
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
})
navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
});
// Function to scroll to the top of the page
function scrollToTop() {
    // Scroll smoothly to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/Hide the button based on scroll position
  window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
// Toggle between Dark Mode and Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.style.backgroundColor = '#ffffff'; // Change background to white
    localStorage.setItem('theme', 'light');
    // themeToggle.textContent = 'Switch to Dark Mode';
  } else {
    body.classList.add('dark');
    body.style.backgroundColor = '#000000'; // Change background to black
    localStorage.setItem('theme', 'dark');
    // themeToggle.textContent = 'Switch to Light Mode';
  }
});

// Check for previously selected theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === 'dark') {
    body.style.backgroundColor = '#000000'; // Set background to black if dark mode was previously selected
    // themeToggle.textContent = 'Switch to Light Mode';
  }
}

