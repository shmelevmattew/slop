// Animated background (Vanta BIRDS) behind the whole site. The libraries are
// vendored under /static/vendor, so the page makes no third-party runtime calls.
(function () {
  if (!window.VANTA || typeof window.VANTA.BIRDS !== 'function') return;
  if (!document.getElementById('vanta-bg')) return;

  // Respect a reduced-motion preference: keep the page still for those users.
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  window.VANTA.BIRDS({
    el: '#vanta-bg',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0xffffff,
    color1: 0xd000ff,
    speedLimit: 3.0,
    separation: 34.0,
    cohesion: 30.0,
    quantity: 4.0,
  });
})();
