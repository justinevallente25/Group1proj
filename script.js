// You can add interactivity for download button, scroll effects, or more
document.querySelector('.download-btn').addEventListener('click', function() {
    alert('Downloading mobile app...');
  });
  // JavaScript to toggle hamburger menu
document.getElementById('hamburger').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
});

// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('header nav ul li a');
   
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');
    });
 });
});



