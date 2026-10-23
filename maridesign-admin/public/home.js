// Desktop: the card list is a vertical "wheel" — the card closest to the centre
// gets `is-center` (full size, full opacity) while the rest fade out. The list
// does not loop: it ends where it ends.
//
// On phones and small tablets the CSS turns the list into a plain grid that
// scrolls with the page, so the wheel behaviour is switched off there.
(function () {
  var wheel = document.querySelector('[data-wheel]');
  if (!wheel) return;

  var small = window.matchMedia('(max-width: 1023.98px)');
  var cards = [];

  function collect() {
    cards = Array.prototype.slice.call(wheel.querySelectorAll('.framer-card'));
  }

  function pick() {
    if (small.matches || !cards.length) return;
    var rect = wheel.getBoundingClientRect();
    var mid = rect.top + rect.height / 2;
    var best = null;
    var bestDist = Infinity;

    cards.forEach(function (card) {
      var r = card.getBoundingClientRect();
      var dist = Math.abs(r.top + r.height / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = card;
      }
    });

    cards.forEach(function (card) {
      card.classList.toggle('is-center', card === best);
    });
  }

  function clear() {
    cards.forEach(function (card) {
      card.classList.remove('is-center');
    });
  }

  // Coalesce scroll events into one measurement per frame.
  var queued = false;
  function onScroll() {
    if (queued || small.matches) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      pick();
    });
  }

  function apply() {
    collect();
    if (small.matches) clear();
    else pick();
  }

  wheel.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', apply);
  window.addEventListener('resize', apply);
  if (small.addEventListener) small.addEventListener('change', apply);

  apply();
})();
