// A duration token from :root in ms. The build minifies "250ms" to ".25s", so read the unit.
export function tokenMs(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const n = parseFloat(v);
  return Number.isNaN(n) ? fallback : /ms$/.test(v) ? n : n * 1000;
}
