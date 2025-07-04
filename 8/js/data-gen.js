import { getRandomArrayElement } from './utils.js';

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Артём',
  'Сергей',
  'Иван',
  'Семён',
  'Kevin',
  'Sarah',
  'Юлия',
  'Мария',
  'Наташа',
  'Полина',
];
const MIN_AVATAR_NUM = 1;
const MAX_AVATAR_NUM = 6;
const MIN_COMMENTS_NUM = 0;
const MAX_COMMENTS_NUM = 30;
const MAX_IMG_DESC_NUM = 25;
const MIN_LIKES_NUM = 15;
const MAX_LIKES_NUM = 200;

const idGenerator = () => {
  let id = 0;
  return () => ++id;
};
const postIdGenerator = idGenerator();
const postId = postIdGenerator();

const createComment = () => ({
  id: postId,
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUM, MAX_AVATAR_NUM)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

function createImageDescription() {
  const postId = postIdGenerator;
  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: 'Фото автора',
    likes: getRandomInteger(MIN_LIKES_NUM, MAX_LIKES_NUM),
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS_NUM, MAX_COMMENTS_NUM) }, createComment),
  };
}
export const getImgDescriptionArray = () => Array.from({ length: MAX_IMG_DESC_NUM }, createImageDescription);

// eslint-disable-next-line no-console
console.log(getImgDescriptionArray);
