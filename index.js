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
