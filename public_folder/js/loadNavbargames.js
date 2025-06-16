// loadNavbar.js
function loadNavbar() {
    fetch('/components/navbargames.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbarContainer').innerHTML = data;
        // JS function inject karne ke baad run karo
        initNavbarJS();
      });
  }
  
  function initNavbarJS() {
    window.toggleMenu = function() {
      const navLinks = document.getElementById("navLinks");
      const quote = document.getElementById("quoteLink");
      navLinks.classList.toggle("active");
      quote.classList.toggle("active");
    };
  }
  window.addEventListener('click', function (e) {
    const dropdown = document.getElementById('servicesList');
    const container = document.querySelector('.Servicesbtn');
    if (!container.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
  // Call when page loads
  document.addEventListener("DOMContentLoaded", loadNavbar);
  