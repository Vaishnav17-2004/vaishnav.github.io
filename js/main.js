/* main.js — Portfolio interactions */

// ── Typed text animation ──
(function () {
  const el = document.getElementById('typed-title');
  if (!el) return;
  const phrases = [
    'Data Scientist',
    'ML Engineer',
    'NLP Enthusiast',
    'Python Developer',
    'AI Explorer',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = phrases[phraseIdx];
    if (deleting) {
      el.textContent = current.substring(0, charIdx--);
      if (charIdx < 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, 60);
    } else {
      el.textContent = current.substring(0, charIdx++);
      if (charIdx > current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
      setTimeout(type, 100);
    }
  }
  setTimeout(type, 800);
})();

// ── Navbar scroll effect ──
(function () {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
})();

// ── Mobile hamburger ──
(function () {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    // animate hamburger
    const spans = btn.querySelectorAll('span');
    if (links.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      const spans = btn.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
})();

// ── Scroll-triggered fade-in ──
(function () {
  const targets = document.querySelectorAll(
    '.project-card, .skill-category, .blog-card, .timeline-item, .about-stats, .contact-link'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
})();

// ── Skill bar animation ──
(function () {
  const bars = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();

// ── Projects filter ──
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = '';
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

// ── Active nav link on scroll ──
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--accent)';
      }
    });
  });
})();

// ── Smooth cursor glow on hero ──
(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;

  let glowEl = null;

  hero.addEventListener('mousemove', (e) => {
    if (!glowEl) {
      glowEl = document.createElement('div');
      glowEl.style.cssText = `
        position: absolute; pointer-events: none; z-index: 0;
        width: 300px; height: 300px; border-radius: 50%;
        background: radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        transition: left 0.1s, top 0.1s;
      `;
      hero.style.position = 'relative';
      hero.appendChild(glowEl);
    }
    const rect = hero.getBoundingClientRect();
    glowEl.style.left = (e.clientX - rect.left) + 'px';
    glowEl.style.top = (e.clientY - rect.top) + 'px';
  });

  hero.addEventListener('mouseleave', () => {
    if (glowEl) { glowEl.remove(); glowEl = null; }
  });
})();
