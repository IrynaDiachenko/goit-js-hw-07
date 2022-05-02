import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImage = document.querySelector('.gallery');

function addGallery(galleryItems) {
  const markup = galleryItems
    .map(
      img =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`,
    )
    .join('');
  galleryImage.innerHTML = markup;
}
addGallery(galleryItems);

galleryImage.addEventListener('click', handlerGallery);

function handlerGallery(event) {
  event.preventDefault();
  const filterDatasetImg = event.target.dataset.source;
  if (!filterDatasetImg) return;

  const instance = basicLightbox
    .create(
      `
  <div class="modal">
  <img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
  </div>
`,
      {
        onShow: instance => {
          window.addEventListener('keydown', onKeyboardClick);
          function onKeyboardClick(event) {
            if (event.code === 'Escape') {
              instance.close();
              window.removeEventListener('keydown', onKeyboardClick);
            }
          }

          instance
            .element()
            .querySelector('.js-modal-img')
            .addEventListener('click', () => {
              instance.close();
            });
        },
      },
    )
    .show();
}
