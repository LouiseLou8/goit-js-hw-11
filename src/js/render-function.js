import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
const simplelightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});
const galleryELem = document.querySelector('.gallery');
function createGallery(images) {
    const markup = images
      .map(
        image => `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>
          <div class="gallery-info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </li>`
      )
        .join('');
    galleryELem.insertAdjacentHTML('beforeend', markup);
    simplelightbox.refresh();

function clearGallery() {}
function showLoader() {}

function hideLoader() {}
