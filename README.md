# Dirk Gerritsen — Academic Webpage

A static, single-page academic site for **Dirk Gerritsen**, Associate Professor of Finance at Utrecht University. Hosted directly on GitHub Pages with no build step.

## Design

- Editorial dark-on-cream layout, inspired by the Utrecht University Finance group's yellow/black identity.
- Display type set in **Fraunces**, body text in **Inter**, technical labels in **JetBrains Mono** (all served from Google Fonts).
- Sunburst motif echoing the UU shield, scroll-reveal animations, and a marquee of journals.
- Fully responsive, accessible (semantic HTML, alt text, `prefers-reduced-motion` respected, keyboard-navigable).
- No frameworks, no build step — three files plus images.

## Files

```
colleage/
├── index.html         ← page
├── css/styles.css     ← all styling
├── js/script.js       ← reveals, sunburst rays, nav state, parallax
├── img/               ← portrait + speaking shots + Finance logo
└── README.md
```

## Deploying on GitHub Pages

1. Create a new repository (e.g. `dirkgerritsen.github.io` for a user site, or `dirkgerritsen-site` for a project site).
2. Copy the contents of this folder into the repository root.
3. Push to `main`.
4. In **Settings → Pages**, set the source to `Deploy from a branch`, branch `main`, folder `/`.
5. The site goes live at `https://<username>.github.io` (user site) or `https://<username>.github.io/<repo>` (project site) within a minute.

To preview locally:

```bash
cd colleage
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing

- **Content** lives entirely in `index.html`. Each section is clearly demarcated with comment banners (`<!-- ===== HERO ===== -->` etc.).
- **Colors / type / spacing** are CSS variables in the `:root` block at the top of `css/styles.css`.
- **Images**: replace anything in `img/` with the same filename to swap photos without touching code.

## Credits

- Photographs: Research in Behavioral Finance Conference, 2022.
- Logo: Finance @ Utrecht University.
- CV content: Dirk Gerritsen, February 2026.
