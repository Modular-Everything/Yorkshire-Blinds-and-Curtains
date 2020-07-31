// ====================================
// ImageHandler for Storyblok
// ================

module.exports = function ImageHandler(src, option) {
  if (!src) return;

  const imageService = '//img2.storyblok.com/';
  const path = src.replace('https://a.storyblok.com', '');

  let size;
  if (!option) {
    size = `1920x1080`;
  } else {
    size = option;
  }

  return imageService + size + path;
};
