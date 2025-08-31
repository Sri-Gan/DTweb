// Simple navigation between Home/About without reloads
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Remove active from all links/pages
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Add active to clicked link/page
    this.classList.add('active');
    const id = this.getAttribute('href').slice(1);
    document.getElementById(id).classList.add('active');
    // Change URL hash for shareability (optional)
    window.location.hash = id;
  });
});

// On page load, show section based on hash (optional)
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelector(`.nav-link[href="#${hash}"]`).classList.add('active');
    document.getElementById(hash).classList.add('active');
  }
});