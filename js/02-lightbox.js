import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imageMarkup = createItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", imageMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}
const galleryBox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
