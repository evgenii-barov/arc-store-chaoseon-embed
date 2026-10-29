// Paste this script in a Custom HTML block. It embeds only the public campaign page.
(() => {
  const script = document.currentScript;
  if (!script) return;
  const source = new URL('./index.html', script.src);
  const channel = crypto.randomUUID();
  source.searchParams.set('parentOrigin', location.origin);
  source.searchParams.set('arcChannel', channel);
  const frame = document.createElement('iframe');
  frame.title = 'ChaosEon × ARC Store — weapons and Raider Loadouts';
  frame.src = source.href;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer';
  frame.setAttribute('allow', 'clipboard-write');
  frame.style.cssText = 'display:block;width:100%;height:1200px;border:0;max-width:100%;background:#000;color-scheme:dark';
  const receive = event => {
    if (!frame.isConnected) { window.removeEventListener('message', receive); return; }
    if (event.source !== frame.contentWindow || event.origin !== source.origin) return;
    const data = event.data;
    if (!data || data.type !== 'arc-store-height' || data.channel !== channel) return;
    if (typeof data.height !== 'number' || !Number.isFinite(data.height) || data.height < 100 || data.height > 50000) return;
    frame.style.height = Math.ceil(data.height) + 'px';
  };
  window.addEventListener('message', receive);
  script.after(frame);
})();
