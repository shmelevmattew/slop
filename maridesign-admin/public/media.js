// Case media: full-screen image viewer, the gallery slider and a light
// deterrent against saving images. Everything is progressive — if a page has no
// matching elements the script does nothing.
(function () {
  var isRu = (document.documentElement.getAttribute('lang') || 'ru') === 'ru';

  // ---------- download deterrent ----------
  // Not a real protection (the browser already has the bytes), but it stops the
  // obvious right-click / drag-to-save gestures on the case imagery.
  document.querySelectorAll('img[data-protected]').forEach(function (img) {
    img.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
    img.addEventListener('dragstart', function (e) {
      e.preventDefault();
    });
  });

  // ---------- full-screen viewer ----------
  var overlay = null;

  function closeLightbox() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    var node = overlay;
    overlay = null;
    document.body.classList.remove('lightbox-open');
    setTimeout(function () {
      if (node.parentNode) node.parentNode.removeChild(node);
    }, 220);
  }

  function openLightbox(src) {
    if (!src) return;
    closeLightbox();
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="' +
      (isRu ? 'Закрыть' : 'Close') +
      '">&times;</button>' +
      '<img src="' +
      src.replace(/"/g, '&quot;') +
      '" alt="" draggable="false" data-protected>';
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
    overlay.querySelector('img').addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
    document.body.appendChild(overlay);
    document.body.classList.add('lightbox-open');
    requestAnimationFrame(function () {
      overlay.classList.add('is-open');
    });
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (button) {
    button.addEventListener('click', function () {
      openLightbox(button.getAttribute('data-lightbox'));
    });
  });

  // Clicking the image itself opens the same viewer.
  document
    .querySelectorAll('.figure-img, .gallery-img, .case-cover img')
    .forEach(function (img) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        openLightbox(img.getAttribute('src'));
      });
    });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // ---------- gallery slider ----------
  document.querySelectorAll('[data-slider]').forEach(function (slider) {
    var track = slider.querySelector('.gallery-track');
    if (!track) return;
    var slides = Array.prototype.slice.call(track.children);
    if (slides.length < 2) return;

    var dots = Array.prototype.slice.call(
      slider.querySelectorAll('[data-slider-dot]')
    );
    var index = 0;

    function render() {
      track.style.transform = 'translateX(' + -index * 100 + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    }

    function go(next) {
      index = (next + slides.length) % slides.length;
      render();
    }

    var prev = slider.querySelector('[data-slider-prev]');
    var next = slider.querySelector('[data-slider-next]');
    if (prev) prev.addEventListener('click', function () { go(index - 1); });
    if (next) next.addEventListener('click', function () { go(index + 1); });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        go(Number(dot.getAttribute('data-slider-dot')) || 0);
      });
    });

    // Touch swipe, so the slider works the same on phones.
    var startX = null;
    slider.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
      startX = null;
    });

    render();
  });
})();
