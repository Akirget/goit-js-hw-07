import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryTemplate = createGalleryTemplate(galleryItems);

let currentTarget = null;

function createGalleryTemplate(picruresList) {
  return picruresList
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join(" ");
}

gallery.insertAdjacentHTML("afterbegin", galleryTemplate);
gallery.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => window.addEventListener("keydown", escapeClose),
      onClose: () => window.removeEventListener("keydown", escapeClose),
    }
  );
  currentTarget = instance;
  instance.show();

  window.addEventListener("keydown", escapeClose);
}

function escapeClose(event) {
  if (event.code === "Escape") {
    currentTarget.close();
  }
}
