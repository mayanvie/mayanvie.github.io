(function () {
  'use strict';

  var html = document.documentElement;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    html.classList.add('motion-off');
    return;
  }

  html.classList.add('has-motion');

  var STAGGER_MS = 65;
  var REVEAL_LAG_MS = 40;

  var STAGGER_GROUPS = [
    { parent: '.project-gallery', child: '.project-card' },
    { parent: '.work-gallery__layout', child: '.project-card' },
    { parent: '.summary-grid', child: '.summary-box' },
    { parent: '.home-bring-grid', child: '.home-bring-card' },
    { parent: '.about-bring-grid', child: '.about-card' },
    { parent: '.path-timeline', child: '.path-timeline__item' }
  ];

  var BLOCK_SELECTORS = [
    '.hero',
    '.page-head',
    '.sec.home-flow',
    '.sec.home-cta',
    '.work-gallery__block',
    '.flow-play',
    '.connect-strip',
    '.content-block',
    '.case-note',
    '.case-meta',
    '.back-link',
    '.center-cta',
    '.lms-section',
    '.essay-lang-note',
    '.essay-page > .tag',
    '.essay-page > h1',
    '.essay-page > .lead',
    '.case-page > .tag',
    '.case-page > h1',
    '.case-page > .lead'
  ];

  function mark(el, delay) {
    el.classList.add('reveal');
    if (delay) el.style.setProperty('--reveal-delay', delay + 'ms');
  }

  function show(el) {
    if (el.classList.contains('is-shown')) return;
    var lag = parseInt(el.style.getPropertyValue('--reveal-delay') || '0', 10);
    window.setTimeout(function () {
      el.classList.add('is-shown');
    }, REVEAL_LAG_MS + lag);
  }

  function init() {
    var seen = new Set();
    var targets = [];

    STAGGER_GROUPS.forEach(function (group) {
      document.querySelectorAll(group.parent).forEach(function (parent) {
        parent.querySelectorAll(group.child).forEach(function (child, i) {
          if (seen.has(child)) return;
          seen.add(child);
          mark(child, i * STAGGER_MS);
          targets.push(child);
        });
      });
    });

    BLOCK_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (seen.has(el)) return;
        seen.add(el);
        mark(el, 0);
        targets.push(el);
      });
    });

    document.querySelectorAll('.about-section').forEach(function (el) {
      if (seen.has(el) || el.querySelector('.about-bring-grid')) return;
      seen.add(el);
      mark(el, 0);
      targets.push(el);
    });

    document.querySelectorAll('.sec-head').forEach(function (el) {
      if (seen.has(el)) return;
      if (el.closest('.sec.home-flow, .sec.home-cta, .work-gallery__block')) return;
      seen.add(el);
      mark(el, 0);
      targets.push(el);
    });

    if (!targets.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach(show);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          show(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();