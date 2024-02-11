import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const makeGallery = items => {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</li>`;
  });
};

galleryEl.insertAdjacentHTML('afterbegin', makeGallery(galleryItems).join(''));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
