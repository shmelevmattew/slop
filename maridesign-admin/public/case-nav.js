// Highlights the section currently in view in the case header, which holds the
// back link and the section titles on one line. IntersectionObserver keeps this
// cheap: no layout reads on every frame. The trigger line sits just below the
// floating pill so "current" matches what the reader sees at the top.
(function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll('[data-section-link]')
  );
  if (!links.length) return;

  var byId = {};
  var targets = [];
  links.forEach(function (link) {
    var id = link.getAttribute('data-section-link');
    var el = document.getElementById(id);
    if (!el) return;
    byId[id] = link;
    targets.push(el);
  });
  if (!targets.length) return;

  var current = links[0];

  function setCurrent(link) {
    if (!link || link === current) return;
    current.classList.remove('is-current');
    link.classList.add('is-current');
    current = link;

    // Keep the active chip visible when the bar itself scrolls sideways.
    if (typeof link.scrollIntoView === 'function') {
      link.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }

  function pick() {
    // The section closest to the header pill wins. The threshold sits a little
    // below the bar so a section that just met the top counts as current
    // instead of leaving the previous one highlighted.
    var line = 160;
    var best = targets[0];
    targets.forEach(function (el) {
      if (el.getBoundingClientRect().top <= line) best = el;
    });
    var link = byId[best.id];
    if (link) setCurrent(link);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(pick, {
      rootMargin: '-120px 0px -55% 0px',
      threshold: [0, 1],
    });
    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.addEventListener('scroll', pick, { passive: true });
  window.addEventListener('resize', pick);
  pick();
})();
