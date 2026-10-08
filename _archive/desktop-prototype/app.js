/* Desktop portfolio. Content lives in projects.js; this file is the behavior. */
const P = PORTFOLIO;
const $ = (s, el = document) => el.querySelector(s);
const desktop = $('#desktop'), iconsEl = $('#icons'), winsEl = $('#windows'), dock = $('#dock');
const isPhone = () => matchMedia('(max-width:700px)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ytThumb = id => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytUrl = p => p.vertical ? `https://youtube.com/shorts/${p.youtube}` : `https://youtu.be/${p.youtube}`;

/* ---------- Wallpaper ---------- */
const wp = $('#wallpaper');
wp.style.backgroundImage = `url("${P.wallpaper}")`;
wp.style.backgroundPosition = P.wallpaperPosition || 'center';

/* ---------- Desktop icons: click to open, drag to move ---------- */
function deselectAll() { iconsEl.querySelectorAll('.icon.selected').forEach(i => i.classList.remove('selected')); }

P.projects.forEach(p => {
  const icon = document.createElement('button');
  icon.className = 'icon' + (p.vertical ? ' vertical' : '');
  icon.type = 'button';
  icon.style.left = p.x + '%';
  icon.style.top = p.y + '%';
  const thumb = p.thumb || (p.youtube ? ytThumb(p.youtube) : p.image);
  icon.innerHTML = `<span class="thumb"><img src="${esc(thumb)}" alt="" loading="lazy"></span><span class="label">${esc(p.title)}</span>`;
  iconsEl.appendChild(icon);

  icon.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    e.stopPropagation();
    deselectAll(); icon.classList.add('selected');
    if (isPhone()) return;                       // phone: grid layout, tap opens via click
    const r = desktop.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY, sl = parseFloat(icon.style.left), st = parseFloat(icon.style.top);
    let moved = false;
    icon.setPointerCapture(e.pointerId);
    const move = ev => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 4) return;   // small wobble still counts as a click
      moved = true; icon.classList.add('dragging');
      icon.style.left = clamp(sl + dx / r.width * 100, 4, 96) + '%';
      icon.style.top = clamp(st + dy / r.height * 100, 5, 82) + '%';
    };
    const up = ev => {
      icon.removeEventListener('pointermove', move);
      icon.removeEventListener('pointerup', up);
      icon.removeEventListener('pointercancel', up);
      icon.classList.remove('dragging');
      if (!moved && ev.type === 'pointerup') openProject(p);
    };
    icon.addEventListener('pointermove', move);
    icon.addEventListener('pointerup', up);
    icon.addEventListener('pointercancel', up);
  });
  // keyboard (Enter/Space gives detail 0) and phone taps
  icon.addEventListener('click', e => { if (e.detail === 0 || isPhone()) openProject(p); });
});

desktop.addEventListener('pointerdown', e => {
  if (e.target === desktop || e.target.id === 'wallpaper' || e.target.id === 'icons') deselectAll();
});

/* ---------- Windows ---------- */
let z = 10;
const open = new Map();   // key -> window element

function focusWin(w) { w.style.zIndex = ++z; }

function closeWin(w) {
  if (w.classList.contains('closing')) return;
  w.classList.add('closing');
  open.delete(w.dataset.key);
  w.addEventListener('animationend', () => w.remove(), { once: true });
}

function openWindow(key, title, html) {
  const existing = open.get(key);
  if (existing) {
    focusWin(existing);
    existing.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.012)' }, { transform: 'scale(1)' }], { duration: 200 });
    return existing;
  }

  const w = document.createElement('section');
  w.className = 'win';
  w.dataset.key = key;
  w.setAttribute('role', 'dialog');
  w.setAttribute('aria-label', title);
  w.innerHTML = `
    <header class="titlebar">
      <div class="lights">
        <button class="l-close" aria-label="Close"></button>
        <button class="l-min" aria-hidden="true" tabindex="-1"></button>
        <button class="l-max" aria-label="Zoom"></button>
      </div>
      <span class="wtitle">${esc(title)}</span>
    </header>
    <div class="wbody">${html}</div>`;
  winsEl.appendChild(w);
  focusWin(w);

  // Center a little above middle, cascade if others are open
  const R = desktop.getBoundingClientRect(), n = open.size;
  w.style.left = Math.max(16, (R.width - w.offsetWidth) / 2 + n * 28) + 'px';
  w.style.top = Math.max(16, (R.height - w.offsetHeight) / 2 - 40 + n * 28) + 'px';
  open.set(key, w);

  w.addEventListener('pointerdown', () => focusWin(w));
  $('.l-close', w).addEventListener('click', () => closeWin(w));
  $('.l-max', w).addEventListener('click', () => w.classList.toggle('max'));
  $('.titlebar', w).addEventListener('dblclick', e => { if (!e.target.closest('.lights')) w.classList.toggle('max'); });

  // Drag by title bar (desktop only)
  const bar = $('.titlebar', w);
  bar.addEventListener('pointerdown', e => {
    if (e.button !== 0 || e.target.closest('.lights') || isPhone() || w.classList.contains('max')) return;
    const R = desktop.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY, sl = w.offsetLeft, st = w.offsetTop;
    bar.setPointerCapture(e.pointerId);
    const move = ev => {
      w.style.left = clamp(sl + ev.clientX - sx, 80 - w.offsetWidth, R.width - 80) + 'px';
      w.style.top = clamp(st + ev.clientY - sy, 0, R.height - 60) + 'px';
    };
    const up = () => { bar.removeEventListener('pointermove', move); bar.removeEventListener('pointerup', up); bar.removeEventListener('pointercancel', up); };
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', up);
    bar.addEventListener('pointercancel', up);
  });

  // Click a poster to load the player in place
  w.querySelectorAll('.poster').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.yt;
    btn.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&playsinline=1&modestbranding=1"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" title="${esc(title)}"></iframe>`;
  }));
  return w;
}

function mediaHTML(p) {
  const cls = 'media' + (p.vertical ? ' vertical' : '');
  if (p.youtube) {
    return `<div class="${cls}"><button class="poster" data-yt="${esc(p.youtube)}" aria-label="Play ${esc(p.title)}">
        <img src="${esc(p.thumb || ytThumb(p.youtube))}" alt=""><span class="play"></span></button></div>
      <a class="watch" href="${esc(ytUrl(p))}" target="_blank" rel="noopener">Watch on YouTube ↗</a>`;
  }
  if (p.video) return `<div class="${cls}"><video src="${esc(p.video)}" poster="${esc(p.image || '')}" controls playsinline preload="metadata"></video></div>`;
  if (p.image) return `<div class="${cls}"><img src="${esc(p.image)}" alt="${esc(p.title)}"></div>`;
  return '';
}

function openProject(p) {
  const cat = P.categories[p.cat] || {};
  const meta = { 'Type': p.type, 'Category': cat.name, 'System': p.system, 'Tools': p.tools };
  const metaHTML = Object.entries(meta).filter(([, v]) => v)
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')
    + (p.result ? `<div class="wide"><dt>Result</dt><dd>${esc(p.result)}</dd></div>` : '');
  const text = `
    <h1>${esc(p.title)}</h1>
    <p class="desc">${esc(p.desc || cat.desc)}</p>
    <dl class="meta">${metaHTML}</dl>`;
  openWindow(p.id, p.title, p.vertical
    ? `<div class="split"><div>${text}</div><div>${mediaHTML(p)}</div></div>`
    : text + mediaHTML(p));
}

function openAbout() {
  const stats = Object.entries(P.stats || {}).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
  openWindow('about', 'About', `
    <div class="about">
      ${P.avatar ? `<img src="${esc(P.avatar)}" alt="">` : `<span class="initials">${esc(P.initials)}</span>`}
      <div><h1>${esc(P.name)}</h1><div class="role">${esc(P.role)}</div></div>
    </div>
    ${(P.about || []).map(t => `<p class="desc">${esc(t)}</p>`).join('')}
    <dl class="meta">${stats}</dl>
    <div class="links">${P.dock.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join('')}</div>`);
}

function openContact() {
  openWindow('contact', 'Notes', `
    <h1>${esc(P.contact.title)}</h1>
    <p class="desc">${esc(P.contact.text)}</p>
    <div class="links">
      <a href="mailto:${esc(P.email)}">${esc(P.email)}</a>
      ${P.dock.filter(s => !s.url.startsWith('mailto:')).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join('')}
    </div>`);
}

/* ---------- Dock ---------- */
function tile({ tag = 'button', cls = '', label, href, inner = '', color }) {
  const el = document.createElement(tag);
  el.className = 'tile ' + cls;
  el.setAttribute('aria-label', label);
  if (color) el.style.background = color;
  if (href) { el.href = href; if (!href.startsWith('mailto:')) { el.target = '_blank'; el.rel = 'noopener'; } }
  else el.type = 'button';
  el.innerHTML = `${inner}<span class="tip">${esc(label)}</span>`;
  dock.appendChild(el);
  return el;
}
const av = tile({ cls: 'avatar', label: 'About', inner: P.avatar ? '' : esc(P.initials) });
if (P.avatar) av.style.backgroundImage = `url("${P.avatar}")`;
av.addEventListener('click', openAbout);
tile({ cls: 'notes', label: 'Contact' }).addEventListener('click', openContact);
dock.appendChild(Object.assign(document.createElement('span'), { className: 'sep' }));
P.dock.forEach(s => tile({ tag: 'a', label: s.label, href: s.url, color: s.color, inner: `<i class="${esc(s.icon)}" aria-hidden="true"></i>` }));

/* Esc closes the front window */
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const front = [...open.values()].sort((a, b) => b.style.zIndex - a.style.zIndex)[0];
  if (front) closeWin(front);
});
