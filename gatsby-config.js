module.exports = {
  siteMetadata: {
    title: 'Yorkshire Blinds & Curtains',
    description: 'Made to measure Blinds Curtains and Shutters',
    baseUrl: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'xPwQr6eLKQf9CFeneKnYUgtt',
        resolveLinks: true,
        homeSlug: 'home',
        version: 'draft',
      },
    },
  ],
};
