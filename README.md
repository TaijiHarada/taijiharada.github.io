# taijiharada.github.io

Personal engineering portfolio — plain HTML/CSS/JS, no build step. Deployed via
GitHub Pages at <https://taijiharada.github.io>.

## Editing

- **Project content** → `js/projects.js` (the `PROJECTS` array). Copy an existing
  object to add a project.
- **Skills** → `js/projects.js` (the `SKILL_GROUPS` array).
- **Layout / sections** → `index.html`
- **Styling** → `css/style.css` (colors live in the `:root` variables at the top)

## Adding photos

Drop images in `assets/img/` and point a project's `images` array at them, e.g.

```js
images: [{ src: "assets/img/pic32-bench.jpg", alt: "PIC32 controller on the bench" }]
```

## Adding video

In a project's `video` field:

```js
video: { type: "youtube", id: "dQw4w9WgXcQ" }   // YouTube
video: { type: "vimeo",   id: "76979871" }       // Vimeo
video: { type: "file",    src: "assets/video/clip.mp4" }  // self-hosted short clip
```

Embeds load only when the play button is clicked (keeps the page fast).

## Deploy

Push to `main`. In the repo: **Settings → Pages → Source: Deploy from a branch →
`main` / root**. Live within ~1 minute.

## Local preview

Any static server works, e.g.:

```bash
python -m http.server 8000
```

then open <http://localhost:8000>.
