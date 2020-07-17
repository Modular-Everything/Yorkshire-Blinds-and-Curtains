// ====================================
// Resolves Richtext fields in Storyblok
// ================

const StoryblokClient = require('storyblok-js-client');
const { plugins } = require('../../gatsby-config');

module.exports = function SbResolve(content) {
  const KEY = plugins.find(
    ({ resolve }) => resolve === 'gatsby-source-storyblok',
  );

  const Storyblok = new StoryblokClient({
    accessToken: KEY,
  });

  const Richtext = Storyblok.richTextResolver.render(content);

  return Richtext;
};
