// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '/src/css/main.min.css';

const gallery = document.querySelector('.gallery');
const images = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', images);

function createGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a
      class="gallery__item"
      href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
