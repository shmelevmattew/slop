// Home / gallery: the card list scrolls like a vertical wheel. The card closest
// to the centre of the wheel gets `is-center` (full size, full opacity), the
// rest fade out. The list is cloned into three copies and the viewport is kept
// inside the middle one, so the wheel loops endlessly.
(function () {
  var wheel = document.querySelector('[data-wheel]');
  if (!wheel) return;

  var originals = Array.prototype.slice.call(wheel.children).filter(function (node) {
    return node.classList && node.classList.contains('framer-card');
  });
  if (!originals.length) return;

  var count = originals.length;
  var setHeight = 0;

  // Two extra copies (before and after) turn the list into a loop. Scrolling
  // then jumps by exactly one copy, which is invisible because the content is
  // identical.
  if (count > 1) {
    for (var copy = 0; copy < 2; copy++) {
      var frag = document.createDocumentFragment();
      originals.forEach(function (node) {
        frag.appendChild(node.cloneNode(true));
      });
      wheel.appendChild(frag);
    }
  }

  var cards = Array.prototype.slice.call(wheel.querySelectorAll('.framer-card'));

  function measure() {
    setHeight =
      count > 1
        ? cards[count].getBoundingClientRect().top - cards[0].getBoundingClientRect().top
        : 0;
  }

  function start() {
    if (setHeight > 0) wheel.scrollTop = setHeight;
  }

  // Keep the viewport inside the middle copy.
  function normalize() {
    if (!(setHeight > 0)) return;
    if (wheel.scrollTop < setHeight) wheel.scrollTop += setHeight;
    else if (wheel.scrollTop >= setHeight * 2) wheel.scrollTop -= setHeight;
  }

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
      queued = false;
      normalize();
      pick();
    });
  }

  wheel.addEventListener('scroll', onScroll, { passive: true });

  window.addEventListener('load', function () {
    measure();
    normalize();
    pick();
  });

  window.addEventListener('resize', function () {
    measure();
    start();
    pick();
  });

  measure();
  start();
  pick();
})();
