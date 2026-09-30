// Plays a short bounce on the hero avatar when it is clicked. The class is
// removed first so a second click restarts the animation instead of being
// ignored while it is already running.
(function () {
  document.querySelectorAll('[data-avatar]').forEach(function (avatar) {
    avatar.addEventListener('click', function () {
      avatar.classList.remove('is-bouncing');
      // Force a reflow so the animation can be re-triggered immediately.
      void avatar.offsetWidth;
      avatar.classList.add('is-bouncing');
    });
    avatar.addEventListener('animationend', function () {
      avatar.classList.remove('is-bouncing');
    });
  });
})();
