(function () {
  var top = document.querySelector('.top');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!top || !toggle || !nav) return;

  function menuLabel(open) {
    if (window.MayanvieI18n) {
      return window.MayanvieI18n.t(open ? 'nav.menuClose' : 'nav.menuOpen');
    }
    return open ? 'Close menu' : 'Open menu';
  }

  function setOpen(open) {
    top.classList.toggle('is-nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', menuLabel(open));
    document.body.classList.toggle('nav-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(!top.classList.contains('is-nav-open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) setOpen(false);
  });

  document.addEventListener('mayanvie:lang', function () {
    var open = top.classList.contains('is-nav-open');
    toggle.setAttribute('aria-label', menuLabel(open));
  });
})();