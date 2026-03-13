/* ============================================
   FireFly Metals — Interactions & Motion
   ============================================ */

(function () {
  'use strict';

  // ── Mobile Menu Toggle ──
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const body = document.body;

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open');
      body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        body.style.overflow = '';
      });
    });
  }

  // ── Nav Scroll Behavior ──
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  const pageHeader = document.querySelector('.page-header');
  const scrollTarget = hero || pageHeader;

  function updateNav() {
    if (!nav) return;
    const scrolled = window.scrollY > 20;
    nav.classList.toggle('nav--scrolled', scrolled);

    // Transparent nav on hero/header pages
    if (scrollTarget) {
      const pastHero = window.scrollY > (scrollTarget.offsetHeight - 68);
      nav.classList.toggle('nav--solid', pastHero);
      nav.classList.toggle('nav--transparent', !pastHero);
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // ── Staggered Reveal for Children ──
  const staggerParents = document.querySelectorAll('.reveal-stagger');

  if (staggerParents.length && 'IntersectionObserver' in window) {
    const staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.reveal-child');
          children.forEach(function (child, i) {
            child.style.transitionDelay = (i * 0.08) + 's';
            child.classList.add('revealed');
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    });

    staggerParents.forEach(function (el) {
      staggerObserver.observe(el);
    });
  }

  // ── Counter Animation for Stats ──
  const statValues = document.querySelectorAll('.stat-card__value, .hero__stat-value');

  if (statValues.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('stat-visible');
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  // ── Smooth Anchor Scrolling ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
