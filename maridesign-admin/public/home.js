// Home page: the project list scrolls like a vertical wheel. The card closest
// to the centre of the wheel gets `is-center` (full size, full opacity), the
// rest fade out, so scrolling reads as spinning the wheel.
(function () {
  var wheel = document.querySelector('[data-wheel]');
  if (!wheel) return;

  var cards = Array.prototype.slice.call(wheel.querySelectorAll('.framer-card'));
  if (!cards.length) return;

  function pick() {
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

  // Coalesce scroll events into one measurement per frame.
  var queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      pick();
      queued = false;
    });
  }

  wheel.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', pick);
  window.addEventListener('load', pick);
  pick();
})();
