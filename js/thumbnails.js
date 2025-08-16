import { getImgDescriptionArray } from './data-gen.js';

const SAMPLEDATA = getImgDescriptionArray();

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

SAMPLEDATA.forEach((photo) => {
  const miniature = template.cloneNode(true);
  const thumb = miniature.querySelector('.picture__img');

  thumb.src = photo.url;
  thumb.alt = photo.description;

  template.dataset.pictureId = photo.id;
  template.querySelector('.picture__comments').textContent = photo.comments;
  template.querySelector('.picture__likes').textContent = photo.likes;
  fragment.appendChild(thumb);

});
/*
SAMPLEDATA.forEach({id, url, comments, likes}) => {
const pictureNode = template.cloneNode(true);

pictureNode.dataset.pictureId = id;
pictureNode.querySelector('.picture__img').src = url;
pictureNode.querySelector('.picture__comments').textContent = comments.length;
pictureNode.querySelector('.picture__likes').textContent = likes;

fragment.appendChild(thumb);
};
*/

container.appendChild(fragment);
