// Copy-to-clipboard for the footer contacts.
// Uses the async Clipboard API when it is available and falls back to a hidden
// textarea + execCommand, which is still the only option on plain HTTP origins
// like a local dev server. The confirmation is a class toggle, so the label
// swap is driven entirely by CSS.
(function () {
  var RESET_MS = 1600;

  function legacyCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '-1000px';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },
        function () {
          return legacyCopy(text);
        }
      );
    }
    return Promise.resolve(legacyCopy(text));
  }

  function showCopied(button) {
    button.classList.add('is-copied');
    clearTimeout(button._copyTimer);
    button._copyTimer = setTimeout(function () {
      button.classList.remove('is-copied');
    }, RESET_MS);
  }

  function showFailed(button) {
    button.classList.add('is-copy-failed');
    clearTimeout(button._copyTimer);
    button._copyTimer = setTimeout(function () {
      button.classList.remove('is-copy-failed');
    }, RESET_MS);
  }

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.addEventListener('click', function () {
      var text = button.getAttribute('data-copy') || '';
      copyText(text)
        .then(function (ok) {
          if (ok) showCopied(button);
          else showFailed(button);
        })
        .catch(function () {
          showFailed(button);
        });
    });
  });
})();
