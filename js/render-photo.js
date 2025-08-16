import {container} from './thumbnails.js';

const openFullView = (pictureId) => {
  
}

container.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    openFullView(currentPicture.dataset.pictureId);
  }
});

