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
const galleryHandler = (e) => {
  e.preventDefault();
  const originalUrl = e.target.dataset.source;
  const instance = basiclightbox.create(`<img src = "${originalUrl}">`);
  instance.show();
};
galleryContainer.insertAdjacentHTML("beforeend", photos);
galleryContainer.addEventListener("click", galleryHandler);
