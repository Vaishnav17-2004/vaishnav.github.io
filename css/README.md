# CSS Folder — Style Guide

## Files
- `style.css` — The single stylesheet for the entire portfolio

## How to Edit Colors

At the very top of `style.css`, you'll find CSS variables in `:root { }`:

```css
:root {
  --bg: #020510;          /* Main background */
  --bg2: #050c1a;         /* Secondary bg */
  --surface: #0d1f3c;     /* Card backgrounds */
  --accent: #00d4ff;      /* Primary cyan (glow/highlight) */
  --accent2: #7b2fff;     /* Purple accent */
  --accent3: #ff3d6e;     /* Pink/red accent */
  --text: #e8f4ff;        /* Main text */
  --text2: #7a9cbf;       /* Secondary/muted text */
}
```

Change any hex value to update the color theme across the entire site.

## Section Labels in CSS
Each major section is clearly labeled with a comment:
- `/* NAVIGATION */`
- `/* HERO */`
- `/* ABOUT */`
- `/* PROJECTS */`
- `/* SKILLS */`
- `/* BLOG */`
- `/* CONTACT */`
- `/* FOOTER */`
- `/* RESPONSIVE */`

## Fonts
Fonts are loaded via Google Fonts link in `index.html`.
To change fonts, update both:
1. The `<link>` tag in `index.html`
2. The font variables in `:root`:
   - `--font-display: 'Orbitron', sans-serif;`
   - `--font-body: 'Syne', sans-serif;`
   - `--font-mono: 'JetBrains Mono', monospace;`

## Adding Custom Styles
Add your custom styles at the bottom of `style.css` to avoid overriding core styles.
