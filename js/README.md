# JS Folder — JavaScript Guide

## Files

### `main.js`
Controls all site interactions. Each feature is in its own IIFE block:

| Feature | How to Edit |
|---|---|
| **Typed text** | Find `const phrases = [...]` and change the array values |
| **Navbar** | Scroll effect triggers at 60px — change `60` to any value |
| **Project filter** | Controlled by `data-category` attribute on each `.project-card` in HTML |
| **Skill bars** | Set by `data-width` on each `.skill-fill` div in HTML (0–100) |
| **Active nav** | Auto-detects current section — no editing needed |

### `particles.js`
Controls the neural background particle animation.

```js
const config = {
  count: 80,          // Number of particles (more = heavier CPU)
  speed: 0.3,         // Movement speed (0.1 = slow, 1.0 = fast)
  maxDist: 130,       // Max distance for connection lines (px)
  particleColor: 'rgba(0, 212, 255,',  // Change RGB values to match your accent
  lineColor: 'rgba(0, 212, 255,',      // Line connection color
};
```

## Performance Tips
- Reduce `count` to `40` on mobile for better performance
- Increase `maxDist` to `160` for denser connections
- The particles automatically resize with the window
