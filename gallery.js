// gallery.js - soporte para múltiples imágenes por producto (lightbox simple)
function initGallery(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const main = container.querySelector('.gallery-main');
  const thumbs = Array.from(container.querySelectorAll('.thumb'));
  thumbs.forEach(t=> t.addEventListener('click', e=> {
    main.src = t.dataset.full || t.src;
  }));
}
// usage: initGallery('.product-gallery');