// Public-folder image paths are plain string literals, not files Vite's
// bundler sees, so they never pick up vite.config.ts's `base` prefix the
// way imported/bundled assets do. Without this, images 404 on GitHub Pages
// (served under /leema-rose-martin/) even though they work fine in local
// dev (served at /).
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
