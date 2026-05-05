(function () {
  'use strict';

  // Mobile nav toggle
  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('[data-menu-toggle]');
    if (!toggle) return;

    var nav = document.querySelector('[data-mobile-nav]');
    if (!nav) return;

    var open = nav.hasAttribute('hidden') === false;
    if (open) {
      nav.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      nav.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Live cart count update via Shopify cart events
  document.addEventListener('cart:updated', function (event) {
    var count = event.detail && typeof event.detail.item_count === 'number' ? event.detail.item_count : null;
    if (count === null) return;
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = count;
    });
  });
})();
