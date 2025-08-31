// Page transitions for nav buttons
document.addEventListener('DOMContentLoaded', () => {
  const navBtns = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === btn.dataset.page) {
          setTimeout(() => page.classList.add('active'), 100); // smooth transition
        }
      });
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  // Particle system (cyber sparks)
  const canvas = document.getElementById('cyber-particles');
  if (canvas) {
    let ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let colors = ['#00fff7','#6d7cff','#14e6d4','#fff'];
    let particles = [];
    for (let i = 0; i < 80; i++) {
      let size = Math.random() * 1.6 + 0.3;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size,
        color: colors[Math.floor(Math.random()*colors.length)],
        glow: Math.random() * 16 + 8
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.glow;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.77;
        ctx.fill();
        ctx.restore();

        // Animate
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }
});
