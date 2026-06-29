/* main.js — renders projects + skills, handles nav and video lightbox */
(function () {
  "use strict";

  /* ---------- Render projects ---------- */
  function projectCard(p) {
    const card = document.createElement("article");
    card.className = "project";
    card.id = p.id;

    const images = p.images && p.images.length ? p.images : [];
    const media = images[0] || null;
    const hasVideo = !!p.video;
    const hasGallery = images.length > 1;

    card.innerHTML = `
      <div class="project__media">
        ${media ? `<img src="${media.src}" alt="${media.alt || p.title}" loading="lazy" />` : ""}
        ${hasVideo ? `<button class="project__play" type="button" aria-label="Play video for ${p.title}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
            <span>Watch video</span>
          </button>` : ""}
        ${hasGallery ? `<button class="project__gallery-btn" type="button" aria-label="View ${images.length} photos of ${p.title}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h12v9H4zM7 3h13v12"/></svg>
            ${images.length} photos
          </button>` : ""}
      </div>
      <div class="project__body">
        <h3 class="project__title">${p.title}</h3>
        ${p.role ? `<p class="project__role">${p.role}</p>` : ""}
        <p class="project__tagline">${p.tagline}</p>
        <div class="project__tags">
          ${(p.tags || []).map((t) => `<span class="chip">${t}</span>`).join("")}
        </div>
        <div class="project__detail">
          <p><span class="project__label">Problem</span> ${p.problem}</p>
          <p><span class="project__label">What I built</span> ${p.built}</p>
        </div>
      </div>
    `;

    if (hasVideo) {
      card.querySelector(".project__play").addEventListener("click", () =>
        openVideo(p.video)
      );
    }
    if (hasGallery) {
      card.querySelector(".project__gallery-btn").addEventListener("click", () =>
        openGallery(images, 0)
      );
    }
    return card;
  }

  const grid = document.getElementById("projects-grid");
  if (grid) PROJECTS.forEach((p) => grid.appendChild(projectCard(p)));

  /* ---------- Render skills ---------- */
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    SKILL_GROUPS.forEach((g) => {
      const col = document.createElement("div");
      col.className = "skills__group";
      col.innerHTML = `
        <h3>${g.group}</h3>
        <ul>${g.items.map((s) => `<li>${s}</li>`).join("")}</ul>
      `;
      skillsGrid.appendChild(col);
    });
  }

  /* ---------- Lightbox (video + image gallery) ---------- */
  const lightbox = document.getElementById("lightbox");
  const frame = document.getElementById("lightbox-frame");
  let gallery = [];   // current image set
  let galleryIdx = 0;

  function embedFor(video) {
    if (video.type === "youtube") {
      return `<iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1"
        title="Project video" frameborder="0" allowfullscreen
        allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
    }
    if (video.type === "vimeo") {
      return `<iframe src="https://player.vimeo.com/video/${video.id}?autoplay=1"
        title="Project video" frameborder="0" allowfullscreen
        allow="autoplay; fullscreen; picture-in-picture"></iframe>`;
    }
    if (video.type === "file") {
      return `<video src="${video.src}" controls autoplay playsinline></video>`;
    }
    return "";
  }

  function show() {
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function openVideo(video) {
    gallery = [];
    frame.innerHTML = embedFor(video);
    show();
  }

  function renderGallery() {
    const img = gallery[galleryIdx];
    frame.innerHTML = `
      <div class="gallery">
        <img src="${img.src}" alt="${img.alt || ""}" />
        ${gallery.length > 1 ? `
          <button class="gallery__nav gallery__nav--prev" aria-label="Previous photo">&#8249;</button>
          <button class="gallery__nav gallery__nav--next" aria-label="Next photo">&#8250;</button>
          <span class="gallery__count">${galleryIdx + 1} / ${gallery.length}</span>
        ` : ""}
      </div>`;
    const prev = frame.querySelector(".gallery__nav--prev");
    const next = frame.querySelector(".gallery__nav--next");
    if (prev) prev.addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
    if (next) next.addEventListener("click", (e) => { e.stopPropagation(); step(1); });
  }

  function step(dir) {
    galleryIdx = (galleryIdx + dir + gallery.length) % gallery.length;
    renderGallery();
  }

  function openGallery(images, idx) {
    gallery = images;
    galleryIdx = idx || 0;
    renderGallery();
    show();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    frame.innerHTML = ""; // stops playback
    gallery = [];
    document.body.style.overflow = "";
  }

  if (lightbox) {
    lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (gallery.length > 1 && e.key === "ArrowLeft") step(-1);
      if (gallery.length > 1 && e.key === "ArrowRight") step(1);
    });
  }

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
