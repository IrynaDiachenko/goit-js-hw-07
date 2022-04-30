import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImage = document.querySelector(".gallery");

function addGallery(galleryItems) {
  const markup = galleryItems.map(img =>
`<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`).join('');


//   galleryImage.insertAdjacentHTML("afterbegin", galleryItemsString);

galleryImage.addEventListener("click", onGalleryClick);

function onGalleryClick (event) {
  event.preventDefault();
  
//   const filterDatasetImg = event.target.dataset.source;
//   if (!filterDatasetImg) return;

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}">
`, {

      onShow: instance => console.log('onShow', instance.element()),
      onClose: instance => console.log('onClose', instance.element())
  });
  instance.show();

  galleryImage.addEventListener("keydown", handlerRemove);
  function handlerRemove (event) {
      if (event.code === "Escape") {
          instance.close(() => galleryImage.removeEventListener("keydowb", handlerRemove))};





// console.log(galleryItems);