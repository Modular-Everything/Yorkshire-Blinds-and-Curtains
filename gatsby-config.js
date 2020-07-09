module.exports = {
  siteMetadata: {
    title: 'Yorkshire Blinds & Curtains',
    description:
      'Yorkshire-based specialists creating made to measure blinds, curtains and Shutters.',
    baseUrl: '',
    postAuthor: 'John Beevers',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'xPwQr6eLKQf9CFeneKnYUgtt',
        resolveLinks: true,
        resolveRelations: ['services.services_selection'],
        homeSlug: 'home',
        version: 'draft',
      },
    },
  ],
};
