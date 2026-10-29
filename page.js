// This public page does not read or set cookies, submit orders, or call private APIs.
(() => {
  const copy = document.getElementById('copy');
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText('ARCSKILLER'); copy.textContent = 'Copied'; }
    catch { copy.textContent = 'Select ARCSKILLER above'; }
  });
  const params = new URLSearchParams(location.search);
  const channel = params.get('arcChannel');
  let parentOrigin;
  try {
    const candidate = new URL(params.get('parentOrigin'));
    if (!['https:', 'http:'].includes(candidate.protocol)) return;
    parentOrigin = candidate.origin;
  } catch { return; }
  if (window.parent === window || !channel) return;
  let scheduled = false;
  let lastHeight = 0;
  const sendHeight = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const height = Math.ceil(document.body.getBoundingClientRect().height);
      if (height === lastHeight) return;
      lastHeight = height;
      window.parent.postMessage({type: 'arc-store-height', channel, height}, parentOrigin);
    });
  };
  new ResizeObserver(sendHeight).observe(document.body);
  window.addEventListener('load', sendHeight);
  document.fonts.ready.then(sendHeight);
  sendHeight();
})();
