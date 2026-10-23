// Desktop: the card list is a vertical "wheel" — the card closest to the centre
// gets `is-center`, the list is cloned into three copies and the viewport is kept
// inside the middle one, so it loops endlessly.
//
// On phones and small tablets the CSS turns the list into a plain grid that
// scrolls with the page, so the wheel is not built at all there.
(function () {
  var wheel = document.querySelector('[data-wheel]');
  if (!wheel) return;

  var small = window.matchMedia('(max-width: 1023.98px)');
  var cards = [];
  var setHeight = 0;

  function originals() {
    return Array.prototype.slice.call(
      wheel.querySelectorAll('.framer-card:not([data-clone])')
    );
  }

  function allCards() {
    return Array.prototype.slice.call(wheel.querySelectorAll('.framer-card'));
  }

  function neutralize() {
    allCards().forEach(function (card) {
      if (card.hasAttribute('data-clone')) card.remove();
      else card.classList.remove('is-center');
    });
    wheel.scrollTop = 0;
    setHeight = 0;
    cards = originals();
  }

  function measure() {
    var list = allCards();
    var count = originals().length;
    setHeight =
      count > 1 && list[count]
        ? list[count].getBoundingClientRect().top - list[0].getBoundingClientRect().top
        : 0;
  }

  function build() {
    var list = originals();
    if (list.length > 1) {
      for (var copy = 0; copy < 2; copy++) {
        var frag = document.createDocumentFragment();
        list.forEach(function (node) {
          var clone = node.cloneNode(true);
          clone.setAttribute('data-clone', '');
          frag.appendChild(clone);
        });
        wheel.appendChild(frag);
      }
    }
    cards = allCards();
    measure();
    if (setHeight > 0) wheel.scrollTop = setHeight;
    pick();
  }

  // Keep the viewport inside the middle copy.
  function normalize() {
    if (!(setHeight > 0)) return;
    if (wheel.scrollTop < setHeight) wheel.scrollTop += setHeight;
    else if (wheel.scrollTop >= setHeight * 2) wheel.scrollTop -= setHeight;
  }

  function pick() {
    if (small.matches) return;
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
    if (queued || small.matches) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      normalize();
      pick();
    });
  }

  function apply() {
    neutralize();
    if (!small.matches) build();
  }

  wheel.addEventListener('scroll', onScroll, { passive: true });

  window.addEventListener('load', function () {
    if (small.matches) return;
    measure();
    pick();
  });

  window.addEventListener('resize', apply);
  if (small.addEventListener) small.addEventListener('change', apply);

  apply();
})();
