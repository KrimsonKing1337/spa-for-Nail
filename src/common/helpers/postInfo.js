import {localStorageGet} from '@/common/helpers/localStorage.js';

export function getUserIdByPost(post) {
  return post.userId;
}

export function getNameByPost(post, users) {
  const userId = getUserIdByPost(post);

  return users[userId - 1].name;
}

export function getShrinkDesc(desc) {
  const tooLong = desc.length > 100;
  const shortDesc = desc.substr(0, 100);

  return tooLong ? `${shortDesc}...` : shortDesc;
}

export function wasPostRead(postId) {
  const postsRead = localStorageGet('postsRead');

  if (!postsRead) return false;

  return postsRead[postId] || false;
}
