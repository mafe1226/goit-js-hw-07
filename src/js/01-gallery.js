import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const photos = createGallery(galleryItems);
function createGallery(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </li>`;
    })
    .join(" ");
}
galleryContainer.insertAdjacentHTML("beforeend", photos);
galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const originalUrl = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src = "${originalUrl}">`);
  instance.show();
});
