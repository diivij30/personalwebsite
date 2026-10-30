/* Renders everything from content.js and runs the animations.
   You shouldn't need to edit this file. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const md = (s = "") => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const has = v => Array.isArray(v) ? v.length > 0 : v != null && v !== "";
const pad = n => String(n).padStart(2, "0");
const ext = url => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ' target="_blank"';

/* ---------- images with placeholder fallback ---------- */
const ph = label => `<div class="ph">${esc(label || "add image")}</div>`;
const pic = (src, alt = "", fit = "") => src
  ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" data-src-label="${esc(src)}"${fit === "contain" ? ' class="contain"' : ""}>`
  : ph("add image");
const zoomPic = (src, cap = "", fit = "") => `<button class="zoom" data-zoom="${esc(src)}" data-cap="${esc(cap)}"${fit ? ` data-fit="${esc(fit)}"` : ""} aria-label="Enlarge image">${pic(src, cap, fit)}</button>`;
function fixBrokenImages(root = document) {
  $$("img[data-src-label]", root).forEach(img => {
    const swap = () => { img.outerHTML = ph("add: " + img.dataset.srcLabel); };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });
}

/* ---------- shared blocks ---------- */
const bullets = (title, items) => has(items) ? `<div class="block"><h4>${title}</h4><ul class="bullets">${items.map(i => `<li>${md(i)}</li>`).join("")}</ul></div>` : "";
const para = (title, text) => has(text) ? `<div class="block"><h4>${title}</h4><p>${md(text)}</p></div>` : "";
const links = items => {
  const real = (items || []).filter(l => has(l.url));
  return real.length ? `<div class="block"><h4>Links</h4><div class="pills">${real.map(l => `<a href="${esc(l.url)}"${ext(l.url)}>${esc(l.label)} ↗</a>`).join("")}</div></div>` : "";
};
const gallery = imgs => has(imgs) ? `<div class="gallery">${imgs.map(i => `
  <figure><div class="frame">${zoomPic(i.src, i.caption, i.fit)}</div>${has(i.caption) ? `<figcaption>${esc(i.caption)}</figcaption>` : ""}</figure>`).join("")}</div>` : "";
const soon = `<p class="soon">Details coming soon.</p>`;

/* ---------- sections ---------- */
function renderIntro(S) {
  ["left", "right"].forEach(side => {
    const c = S.intro[side];
    const slide = has(c.image) ? `<li class="slide-row"><figure class="slide"><div class="slide-img">${pic(c.image, c.caption)}</div>${has(c.caption) ? `<figcaption class="meta">${esc(c.caption)}</figcaption>` : ""}</figure></li>` : "";
    $(`[data-col="${side}"]`).innerHTML = `
      <h2 class="col-head">${esc(c.word)}</h2>
      <ul class="rows">${slide}${c.rows.map(r => `<li><span>${esc(r.title)}</span><span class="meta">${esc(r.meta)}</span></li>`).join("")}</ul>`;
  });
  $$("[data-photo]").forEach(el => el.innerHTML = pic(S.photo, S.fullName));
  $("[data-foot-left]").textContent = S.intro.footLeft;
  $("[data-foot-right]").textContent = S.intro.footRight;
  $("[data-end]").textContent = S.intro.end;
  const btn = $("[data-end-btn]");
  btn.textContent = S.intro.button.label + " ↓";
  btn.href = S.intro.button.href;
  $$(".stage .col-head, .stage .rows li, .stage .stage-foot p").forEach((el, i) => el.style.animationDelay = `${0.25 + (i % 7) * 0.06}s`);
}

function renderHome(S) {
  $("[data-headline]").textContent = S.home.headline;
  $("[data-bio]").textContent = S.home.bio;
  $("[data-badge]").textContent = S.badge;
  const auto = {
    "#projects": `${S.projects.length} projects`,
    "#interests": `${S.interests.reduce((n, g) => n + g.items.length, 0)} activities`,
  };
  $("[data-home-links]").innerHTML = S.home.links.map(l => `
    <li><a href="${esc(l.href)}"><span class="lbl">${esc(l.label)} <i>↗</i></span><span class="mono">${esc(l.note === "auto" ? auto[l.href] || "" : l.note)}</span></a></li>`).join("");
}

function renderResearch(S) {
  const R = S.research;
  const [hero, ...rest] = R.photos;
  $("[data-research]").innerHTML = `
    <div class="r-hero">
      <div class="r-hero-inner">
        <div class="r-hero-top reveal">
          <p class="eyebrow light">01 / Research · ${esc(R.field)}</p>
          <p class="eyebrow light">Regeneron ISEF 2026 · Third Place Grand Award</p>
        </div>
        <h2 class="r-title reveal">${esc(R.title)}</h2>
        <p class="r-sub reveal">${esc(R.subtitle)}</p>
        <dl class="r-meta reveal">${R.meta.map(m => `<div><dt>${esc(m.k)}</dt><dd>${esc(m.v)}</dd></div>`).join("")}</dl>
      </div>
    </div>

    <div class="r-body">
      <div class="r-story">${R.story.map(p => `<p class="reveal">${md(p)}</p>`).join("")}</div>

      <div class="bento reveal">
        ${hero ? `<figure class="b-main">${zoomPic(hero.src, hero.caption, hero.fit)}</figure>` : ""}
        ${rest.slice(0, 4).map((p, i) => `<figure class="b-${i + 1}">${zoomPic(p.src, p.caption, p.fit)}</figure>`).join("")}
      </div>
      <div class="captions">${R.photos.slice(0, 5).map((p, i) => has(p.caption) ? `<span><b class="mono">${pad(i + 1)}</b> ${esc(p.caption)}</span>` : "").join("")}</div>

      <div class="r-stats">${R.stats.map(s => `
        <div class="r-stat reveal"><p class="v">${esc(s.value)}${has(s.unit) ? `<small>${esc(s.unit)}</small>` : ""}</p><p class="l">${esc(s.label)}</p></div>`).join("")}
      </div>


      ${has(R.awards) ? `<div class="r-block">
        <div class="r-block-head reveal"><p class="eyebrow">Recognition</p><h3>Awards</h3></div>
        <ul class="alist">${R.awards.map(a => {
          const inner = `<span class="alist-award">${esc(a.award)}</span><span class="mono">${esc(a.event)}${has(a.url) ? " ↗" : ""}</span>`;
          return `<li class="reveal">${has(a.url) ? `<a href="${esc(a.url)}"${ext(a.url)}>${inner}</a>` : `<div>${inner}</div>`}</li>`;
        }).join("")}</ul>
      </div>` : ""}

      ${has(R.press) ? `<div class="r-block">
        <div class="r-block-head reveal"><p class="eyebrow">In the news</p><h3>EcoFog in the <em>press</em></h3></div>
        <div class="press">${R.press.map(p => `
          <article class="press-card reveal">
            <div class="press-img">${zoomPic(p.src, p.title)}</div>
            <p class="mono">${esc(p.outlet)}</p>
            <p class="press-title">${esc(p.title)}</p>
          </article>`).join("")}
        </div>
      </div>` : ""}

      <div class="r-buttons reveal">${R.buttons.filter(b => b.action || has(b.url)).map(b =>
        b.action === "abstract" ? `<button class="obtn" data-abstract>${esc(b.label)}</button>`
        : b.zoom ? `<button class="obtn" data-zoom="${esc(b.url)}" data-cap="${esc(R.title + " " + b.label.toLowerCase())}" data-fit="contain">${esc(b.label)}</button>`
        : `<a class="obtn" href="${esc(b.url)}"${ext(b.url)}>${esc(b.label)} ↗</a>`).join("")}
      </div>
    </div>`;
  $("[data-abstract]")?.addEventListener("click", () => openModal(`
    <p class="eyebrow">Abstract</p><h3 class="modal-title">${esc(R.title)}</h3><p class="lede small">${esc(R.subtitle)}</p><p class="abstract">${esc(R.abstract)}</p>`));
}

/* ---------- project / interest drawers ---------- */
const ready = p => has(p.summary) || has(p.body);
const docThumb = d => d.driveId ? `https://drive.google.com/thumbnail?id=${encodeURIComponent(d.driveId)}&sz=w800` : (d.thumb || "");
const host = url => { try { return new URL(url, location.href).hostname.replace(/^www\./, "") || "this site"; } catch { return ""; } };

function media(p) {
  const imgs = (p.images || []).map(i => `<figure class="m-item">${zoomPic(i.src, i.caption, i.fit)}${has(i.caption) ? `<figcaption>${esc(i.caption)}</figcaption>` : ""}</figure>`);
  if (p.video?.youtube) {
    const id = esc(p.video.youtube);
    imgs.push(`<figure class="m-item m-video"><a href="https://youtu.be/${id}" target="_blank" rel="noopener" aria-label="Watch ${esc(p.video.title || "video")} on YouTube">
      <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" data-doc-img><span class="play" aria-hidden="true"></span></a>
      <figcaption>${esc(p.video.title || "Video")} · YouTube ↗</figcaption></figure>`);
  }
  return imgs.length ? `<div class="m-strip">${imgs.join("")}</div>` : "";
}

function docCards(docs) {
  if (!has(docs)) return "";
  return `<div class="docs">${docs.map(d => `
    <a class="doc" href="${esc(d.url)}"${ext(d.url)}>
      <span class="doc-thumb" data-kind="${esc(d.kind || "Link")}">${docThumb(d) ? `<img src="${esc(docThumb(d))}" alt="" loading="lazy" data-doc-img>` : ""}</span>
      <span class="doc-text">
        <span class="mono">${esc(d.kind || "Link")}</span>
        <span class="doc-title">${esc(d.title)}</span>
        <span class="doc-host">${/^https?:/.test(d.url) ? esc(host(d.url)) : "Click to open"} <i>↗</i></span>
      </span>
    </a>`).join("")}</div>`;
}

function drawer(p) {
  const meta = [p.when, p.place, p.team].filter(has);
  return `
    ${has(p.summary) ? `<p class="d-lede">${md(p.summary)}</p>` : ""}
    ${meta.length ? `<p class="d-meta">${meta.map(esc).join('<i>/</i>')}</p>` : ""}
    <div class="d-grid">
      <div class="d-body">${(p.body || []).map(t => `<p>${md(t)}</p>`).join("")}</div>
      <div class="d-side">
        ${has(p.facts) ? `<ul class="facts">${p.facts.map(f => `<li><span class="f-v" data-count="${esc(f.value)}">${esc(f.value)}</span><span class="f-l">${esc(f.label)}</span></li>`).join("")}</ul>` : ""}
        ${has(p.awards) ? `<ul class="d-awards">${p.awards.map(a => {
          const inner = `<span>${esc(a.award)}</span><span class="mono">${esc(a.event)}${has(a.url) ? " ↗" : ""}</span>`;
          return `<li>${has(a.url) ? `<a href="${esc(a.url)}"${ext(a.url)}>${inner}</a>` : inner}</li>`;
        }).join("")}</ul>` : ""}
      </div>
    </div>
    ${media(p)}
    ${docCards(p.docs)}`;
}

function indexList(items, start = 1) {
  return `<ol class="plist">${items.map((p, i) => {
    const ok = ready(p);
    const img = p.images?.[0]?.src || (p.video?.youtube ? `https://i.ytimg.com/vi/${p.video.youtube}/hqdefault.jpg` : "");
    return `<li class="pitem${ok ? "" : " is-soon"}"${img ? ` data-hover="${esc(img)}"` : ""}>
      <button class="prow" ${ok ? 'aria-expanded="false"' : "disabled"}>
        <span class="pnum mono">${pad(i + start)}</span>
        <span class="ptitle">${esc(p.title)}</span>
        <span class="pkick mono">${ok ? esc(p.kicker || "") : "Coming soon"}</span>
        <span class="pplus" aria-hidden="true"></span>
      </button>
      ${ok ? `<div class="pdrawer"><div class="pdrawer-inner"><div class="pdrawer-pad">${drawer(p)}</div></div></div>` : ""}
    </li>`;
  }).join("")}</ol>`;
}

function wireDrawers(root) {
  $$(".prow[aria-expanded]", root).forEach(btn => btn.addEventListener("click", () => {
    const item = btn.closest(".pitem"), open = btn.getAttribute("aria-expanded") !== "true";
    $$(".pitem.open", root).forEach(o => { if (o !== item) { o.classList.remove("open"); $(".prow", o).setAttribute("aria-expanded", "false"); } });
    item.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    if (open) { countUp(item); setTimeout(() => item.scrollIntoView({ behavior: "smooth", block: "start" }), 380); }
  }));
}

/* cursor-following image preview on hover (desktop) */
function hoverPreview() {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const box = document.createElement("div");
  box.className = "hover-img";
  box.innerHTML = "<img alt=''>";
  document.body.appendChild(box);
  const img = $("img", box);
  let x = 0, y = 0, cx = 0, cy = 0, on = false, raf = 0;
  const loop = () => {
    cx += (x - cx) * .14; cy += (y - cy) * .14;
    box.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%) rotate(${(x - cx) * .04}deg)`;
    raf = on || Math.abs(x - cx) > .5 ? requestAnimationFrame(loop) : 0;
  };
  $$(".pitem[data-hover]").forEach(li => {
    const row = $(".prow", li);
    row.addEventListener("mouseenter", e => {
      if (li.classList.contains("open")) return;
      img.src = li.dataset.hover; x = cx = e.clientX; y = cy = e.clientY; on = true;
      box.classList.add("show"); raf ||= requestAnimationFrame(loop);
    });
    row.addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; });
    row.addEventListener("mouseleave", () => { on = false; box.classList.remove("show"); });
    row.addEventListener("click", () => { on = false; box.classList.remove("show"); });
  });
}

function renderProjects(S) {
  $("[data-projects]").innerHTML = indexList(S.projects);
  wireDrawers($("[data-projects]"));
}

function renderInterests(S) {
  $("[data-interests]").innerHTML = S.interests.map((g, gi) => `
    <div class="igroup reveal">
      <p class="mono">${pad(gi + 1)}</p>
      <h3 class="igroup-name">${esc(g.group)}</h3>
      <ul class="ilist">${g.items.map((it, i) => ready(it)
        ? `<li><button class="ilink" data-interest="${gi}-${i}"><span>${esc(it.title)}</span><i>↗</i></button></li>`
        : `<li><span class="ilink soon-item"><span>${esc(it.title)}</span><em class="mono">soon</em></span></li>`).join("")}
      </ul>
    </div>`).join("");
  $$("[data-interest]").forEach(b => b.addEventListener("click", () => {
    const [g, i] = b.dataset.interest.split("-").map(Number);
    const it = S.interests[g].items[i];
    openModal(`<p class="eyebrow">${esc(S.interests[g].group)}</p><h3 class="modal-title">${esc(it.title)}</h3>${drawer(it)}`);
  }));
}

function renderEducation(S) {
  const E = S.education, ib = E.ibdp, ig = E.igcse, tests = E.tests || [];
  const row = (label, value, note = "", url = "") => {
    const inner = `<span class="es-label">${esc(label)}${has(note) ? `<em>${esc(note)}${has(url) ? " ↗" : ""}</em>` : ""}</span><span class="es-value">${esc(value)}</span>`;
    return `<li>${has(url) ? `<a href="${esc(url)}"${ext(url)}>${inner}</a>` : `<div>${inner}</div>`}</li>`;
  };
  const block = (title, sub, rows) => `<div class="es-block reveal">
    <div class="es-head"><h3>${title}</h3>${has(sub) ? `<p>${esc(sub)}</p>` : ""}</div>
    <ul class="es-rows">${rows.join("")}</ul>
  </div>`;

  const blocks = [];
  if (ib) blocks.push(block("IB Diploma", ib.subjects.join(", "), ib.sessions.map(s => row(s.name, s.total))));
  if (ig) blocks.push(block("Cambridge IGCSE", `${ig.label} · ${ig.results.filter(r => r.grade === "A*").length} A*s`,
    ig.results.map(r => row(r.subject, `${r.percent}%  ${r.grade}`, r.award, r.url))));
  tests.forEach(t => blocks.push(block(t.name, "", [row("Total", `${t.score} / ${t.max}`), ...t.parts.map(p => row(p.name, `${p.score} / ${p.max}`))])));

  $("[data-education]").innerHTML = `
    <div class="school-line reveal">
      <h3>${esc(E.school)}</h3>
      <p class="mono">${[E.location, E.years].filter(has).map(esc).join(" · ")}</p>
    </div>
    ${blocks.join("")}`;
}

/* numbers count up from 0 the first time they appear */
function countUp(root = document) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  $$("[data-count]:not(.counted)", root).forEach(el => {
    const raw = el.dataset.count, m = raw.match(/[\d,.]+/);
    if (!m) return;
    const target = parseFloat(m[0].replace(/,/g, "")), dec = (m[0].split(".")[1] || "").length, comma = m[0].includes(",");
    const pre = raw.slice(0, m.index), post = raw.slice(m.index + m[0].length);
    el.classList.add("counted");
    const t0 = performance.now(), dur = 1300;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - (1 - k) ** 3;
      let n = (target * e).toFixed(dec);
      if (comma) n = Number(n).toLocaleString("en-US");
      el.textContent = pre + n + post;
      if (k < 1) requestAnimationFrame(step); else el.textContent = raw;
    };
    requestAnimationFrame(step);
  });
}

/* split section headings into words that slide up */
function splitHeadings() {
  $$(".section-head h2, .e-head h3").forEach(h => {
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(w => {
          if (!w) return;
          if (/^\s+$/.test(w)) return frag.appendChild(document.createTextNode(w));
          const s = document.createElement("span"); s.className = "w"; s.innerHTML = `<span>${esc(w)}</span>`; frag.appendChild(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
    walk(h);
    $$(".w > span", h).forEach((s, i) => s.style.transitionDelay = `${i * 70}ms`);
    h.classList.add("split");
  });
}

function renderContact(S) {
  const mail = $("[data-email]");
  mail.textContent = S.email;
  mail.href = `mailto:${S.email}`;
  $("[data-socials]").innerHTML = S.socials.filter(s => has(s.url)).map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("");
  $("[data-fine]").textContent = `© ${new Date().getFullYear()} ${S.fullName} · ${S.location}`;
}

function render() {
  const S = SITE;
  document.title = `${S.fullName || S.name} | Portfolio`;
  $$("[data-name]").forEach(el => el.textContent = S.name);
  renderIntro(S);
  renderHome(S);
  renderResearch(S);
  renderProjects(S);
  renderInterests(S);
  renderEducation(S);
  renderContact(S);
  fixBrokenImages();
  $$("img[data-doc-img]").forEach(img => {
    const drop = () => img.remove();
    if (img.complete && img.naturalWidth === 0) drop(); else img.addEventListener("error", drop, { once: true });
  });
  splitHeadings();
  hoverPreview();
}

/* ---------- popups ---------- */
const modal = $("#modal"), lightbox = $("#lightbox");
function openModal(html) {
  $("[data-modal-body]").innerHTML = html;
  fixBrokenImages(modal);
  countUp(modal);
  modal.showModal();
  modal.scrollTop = 0;
}
function openLightbox(src, cap, fit) {
  const img = $("[data-lb-img]");
  img.src = src;
  img.alt = cap || "";
  $("[data-lb-cap]").textContent = cap || "";
  lightbox.classList.toggle("tall", fit === "contain");
  lightbox.showModal();
}
function popups() {
  document.addEventListener("click", e => {
    const z = e.target.closest("[data-zoom]");
    if (z) { e.preventDefault(); openLightbox(z.dataset.zoom, z.dataset.cap, z.dataset.fit); }
  });
  [modal, lightbox].forEach(d => {
    d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
    d.addEventListener("close", () => document.body.style.overflow = "");
    d.addEventListener("cancel", () => document.body.style.overflow = "");
  });
  const lock = () => document.body.style.overflow = "hidden";
  const om = modal.showModal.bind(modal), ol = lightbox.showModal.bind(lightbox);
  modal.showModal = () => { om(); lock(); };
  lightbox.showModal = () => { ol(); lock(); };
}

/* ---------- intro stage: scroll-driven animation (ported from drjoyce.co) ---------- */
function stage() {
  const mq = matchMedia("(min-width: 960px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)");
  const st = $("[data-stage]"), wrap = $(".stage-wrap", st), amp = $(".amp", st), portrait = $(".portrait", st);
  const end = $(".stage-end", st), foot = $(".stage-foot", st), hint = $(".scroll-hint", st);
  const heads = $$(".col-head", st);
  const rowsL = $$(".col-left .rows > li", st), rowsR = $$(".col-right .rows > li", st);
  const all = [...rowsL, ...rowsR, ...heads, amp, portrait, end, foot, hint];

  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const B = (t, a, b) => clamp((t - a) / (b - a));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
  let geo = null, last = -1, raf = 0;

  const reset = () => all.forEach(el => {
    el.style.transform = el.style.opacity = el.style.clipPath = el.style.pointerEvents = "";
    [...el.children].forEach(c => c.style.opacity = "");
  });

  function measure() {
    reset();
    geo = null;
    if (!mq.matches) return;
    const W = wrap.getBoundingClientRect(), P = portrait.getBoundingClientRect();
    const pw = P.width, ph = P.height, cx = P.left - W.left + pw / 2, cy = P.top - W.top + ph / 2;
    const f = el => { const r = el.getBoundingClientRect(); return { el, dx: cx - (r.left - W.left + r.width / 2), dy: cy - (r.top - W.top), s: pw / r.width }; };
    const fs = parseFloat(getComputedStyle(amp).fontSize), A = amp.getBoundingClientRect();
    const s = 1.745 * ph / fs, C = Math.max(48, Math.min(72, .29 * fs * s - pw / 2));
    const hl = heads[0].getBoundingClientRect(), hr = heads[1].getBoundingClientRect();
    const n = Math.max(rowsL.length, rowsR.length);
    geo = {
      rows: Array.from({ length: n }, (_, i) => [rowsL[i], rowsR[i]].filter(Boolean).map(f)),
      hL: { dx: cx - pw / 2 - C - (hl.right - W.left), dy: cy - .1 * ph - (hl.top - W.top + hl.height / 2) },
      hR: { dx: cx + pw / 2 + C - (hr.left - W.left), dy: cy - .1 * ph - (hr.top - W.top + hr.height / 2) },
      amp: { dy: cy - (A.top - W.top + A.height / 2), s },
    };
    last = -1;
    update();
  }

  function update() {
    raf = 0;
    if (!geo) return;
    const r0 = st.getBoundingClientRect(), span = st.offsetHeight - innerHeight;
    const t = span > 0 ? clamp(-r0.top / span) : 0;
    if (Math.abs(t - last) < 5e-4) return;
    last = t;

    // list rows fly into the portrait and become its frame lines
    geo.rows.forEach((pair, n) => {
      const r = ease(B(t, .05 + n * .035, .38 + n * .025));
      const op = (1 - B(t, .47, .56)).toFixed(3), inner = (1 - B(r, 0, .35)).toFixed(3);
      pair.forEach(e => {
        e.el.style.transform = `translate3d(${(e.dx * r).toFixed(2)}px,${(e.dy * r).toFixed(2)}px,0) scaleX(${(1 + (e.s - 1) * r).toFixed(4)})`;
        e.el.style.opacity = op;
        [...e.el.children].forEach(c => c.style.opacity = inner);
      });
    });
    // the two big words slide in to flank the portrait
    const h = ease(B(t, .1, .6));
    heads[0].style.transform = `translate3d(${(geo.hL.dx * h).toFixed(2)}px,${(geo.hL.dy * h).toFixed(2)}px,0)`;
    heads[1].style.transform = `translate3d(${(geo.hR.dx * h).toFixed(2)}px,${(geo.hR.dy * h).toFixed(2)}px,0)`;
    // giant ampersand settles behind the portrait and fades
    const a = ease(B(t, .06, .62));
    amp.style.transform = `translate3d(0,${(geo.amp.dy * a).toFixed(2)}px,0) scale(${(1 + (geo.amp.s - 1) * a).toFixed(4)})`;
    amp.style.opacity = (1 - .88 * a).toFixed(3);
    foot.style.opacity = hint.style.opacity = (1 - B(t, 0, .12)).toFixed(3);
    // portrait opens from the middle
    const c = (50 * (1 - ease(B(t, .48, .76)))).toFixed(2);
    portrait.style.clipPath = `inset(${c}% 0 ${c}% 0)`;
    // closing line + button
    const e = B(t, .74, .88);
    end.style.opacity = e.toFixed(3);
    end.style.pointerEvents = e > .5 ? "auto" : "none";
  }

  const tick = () => { raf ||= requestAnimationFrame(update); };
  let rt = 0;
  const later = () => { clearTimeout(rt); rt = setTimeout(measure, 120); };
  addEventListener("scroll", tick, { passive: true });
  addEventListener("resize", later);
  addEventListener("load", measure);
  mq.addEventListener?.("change", measure);
  document.fonts?.ready?.then(measure);
  // wait for the load-in animation to finish before measuring
  setTimeout(measure, 1300);
  measure();
}

/* ---------- nav, menu, reveals ---------- */
function chrome() {
  const nav = $("#nav"), stageEl = $("[data-stage]");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 40);
    const r = $("#research").getBoundingClientRect();
    nav.classList.toggle("on-dark", r.top < 60 && $(".r-hero").getBoundingClientRect().bottom > 60);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const btn = $("#menuBtn"), panel = $("#menuPanel");
  const setMenu = open => { panel.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : ""; };
  btn.addEventListener("click", () => setMenu(!panel.classList.contains("open")));
  $$("a", panel).forEach(a => a.addEventListener("click", () => setMenu(false)));

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    if (!e.target.closest(".pdrawer")) countUp(e.target);
    io.unobserve(e.target);
  }), { threshold: .1 });
  $$(".reveal").forEach(el => io.observe(el));

  const navLinks = $$(".nav-links a");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target === stageEl ? "about" : e.target.id;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["home", "about", "research", "projects", "interests", "education"].forEach(id => spy.observe($("#" + id)));
}

render();
popups();
stage();
chrome();
