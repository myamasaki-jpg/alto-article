(() => {
  'use strict';

  window.dataLayer = window.dataLayer || [];
  const utmEntries = Array.from(new URLSearchParams(window.location.search))
    .filter(([key]) => key.startsWith('utm_'));

  document.querySelectorAll('.cta').forEach((cta) => {
    const destination = new URL(cta.href);
    new Set(utmEntries.map(([key]) => key)).forEach((key) => {
      destination.searchParams.delete(key);
    });
    utmEntries.forEach(([key, value]) => destination.searchParams.append(key, value));
    cta.href = destination.href;

    cta.addEventListener('click', () => {
      window.dataLayer.push({
        event: 'cta_click',
        cta_position: cta.dataset.cta
      });
    });
  });

})();
