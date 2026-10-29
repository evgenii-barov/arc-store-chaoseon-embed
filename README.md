# ChaosEon × ARC Store — embeddable partner page

[Preview the page](https://evgenii-barov.github.io/arc-store-chaoseon-embed/) · [See it embedded](https://evgenii-barov.github.io/arc-store-chaoseon-embed/embed-example.html) · [Download ZIP](https://github.com/evgenii-barov/arc-store-chaoseon-embed/archive/refs/heads/codex/chaoseon-embed.zip)

Use this public package to add the ARC Store partner page to **arcraiderskill.com**. The design matches ARC Store, including the centered text and buttons requested for mobile.

## Embed the full page

Paste this into a **Custom HTML** block at the intended position:

```html
<script src="https://evgenii-barov.github.io/arc-store-chaoseon-embed/embed.js" defer></script>
```

The script inserts a responsive iframe and adjusts its height automatically, including when an FAQ opens or the screen changes size. Its styles stay inside the iframe and do not change your website. Shopping links open ARC Store in a new tab with `ref=arcskiller`. The embedded page does not contain checkout, sign-in, or a partner dashboard.

Use [snippets/full-page.html](snippets/full-page.html) for a version with a no-JavaScript fallback. Place it in a section with sufficient width, below the skill planner or in a dedicated partner page. Do not cover planner controls.

If your CMS removes script tags, upload this folder to your own static hosting and use a permitted HTML block, or use [snippets/banner.html](snippets/banner.html) / [snippets/card.html](snippets/card.html), which need no JavaScript. A fixed-height iframe is also possible, with scrolling enabled:

```html
<iframe
  src="https://evgenii-barov.github.io/arc-store-chaoseon-embed/"
  title="ChaosEon × ARC Store"
  width="100%" height="1800" loading="lazy"
  style="display:block;border:0;background:#000"
  allow="clipboard-write">
</iframe>
```

For websites with a Content Security Policy, allow the chosen static host specifically in `script-src` and `frame-src`. No wildcard, `unsafe-eval`, or changes to the ARC Store checkout security are needed. This is a separate public promotional page; embedding the store checkout URL is not supported.

## Self-hosting

Upload the entire repository folder to a path such as `/arc-store/` on your server. There is no build, package installation, database, or environment file. Keep the relative files together. Then replace the script URL with `https://YOUR-DOMAIN/arc-store/embed.js`.

To preview locally:

```sh
python -m http.server 8080
```

Open `http://localhost:8080/embed-example.html`. Use an HTTP server rather than opening files with `file://`.

## Link and promo code

- Public campaign: https://arc-store.pro/partners/arcskiller/?ref=arcskiller
- Promo code: **ARCSKILLER**
- Weapons V: https://arc-store.pro/services/weapons-level-5/?ref=arcskiller
- Raider Loadout: https://arc-store.pro/services/raider-loadout/?ref=arcskiller

Keep the referral parameter on every store link. Tracking begins when the visitor reaches ARC Store. This embedded page sets no tracking cookies and makes no private API requests. It does not fetch an offer percentage across domains: the store cart confirms current terms. Level V builds, Raider Loadouts and blueprint sets retain their own pricing and do not receive this extra promo discount. The partner link can still attribute those orders.

Your private dashboard link is supplied separately. Never add it to this repository or an advertising placement. Keep the visible affiliate disclosure.

## Media

`banners/`: 970×250 desktop, 320×100 mobile and 300×250 rectangle, each as PNG, WebP and WebP @2x. `logo/`: transparent ARC Store logo. Use the mobile artwork on phones instead of shrinking the desktop banner. Source images used by the page are in `assets/`.

## Files

- `index.html`, `landing.css`, `theme.css`, `page.js`: complete public page.
- `embed.js`: responsive iframe loader; incoming resize messages are checked against the iframe window, origin and instance channel.
- `embed-example.html`: example inside an unrelated website shell.
- `snippets/`: full-page, banner and card embed options.

## Usage

This is a promotional integration package for the ChaosEon × ARC Store partnership. Branding, fonts and game imagery retain their respective owners' rights; no blanket open-source license is granted for those assets. ARC Store is independent of Embark Studios and ARC Raiders.
