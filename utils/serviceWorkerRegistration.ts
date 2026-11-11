export function registerServiceWorker() {
  // In development a caching service worker fights with hot reload, so only register in builds.
  if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;

  // Called from an effect after hydration, when the window 'load' event has usually already
  // fired, so register right away instead of waiting for it.
  navigator.serviceWorker.register('/sw.js').catch((err) => {
    console.error('ServiceWorker registration failed: ', err);
  });
}
