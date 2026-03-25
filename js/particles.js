/* particles.js — Neural network particle background */
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], connections = [];

  const config = {
    count: 80,
    speed: 0.3,
    maxDist: 130,
    particleColor: 'rgba(0, 212, 255,',
    lineColor: 'rgba(0, 212, 255,',
    sizes: [1, 1.5, 2],
  };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function initParticles() {
    particles = [];
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-config.speed, config.speed),
        vy: rand(-config.speed, config.speed),
        r: config.sizes[Math.floor(Math.random() * config.sizes.length)],
        alpha: rand(0.3, 0.8),
        pulse: rand(0, Math.PI * 2),
        pulseSpeed: rand(0.01, 0.03),
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    // Update & draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      const alpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = config.particleColor + alpha + ')';
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.maxDist) {
          const opacity = (1 - dist / config.maxDist) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = config.lineColor + opacity + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener('resize', () => { resize(); initParticles(); });

  resize();
  initParticles();
  drawParticles();
})();
