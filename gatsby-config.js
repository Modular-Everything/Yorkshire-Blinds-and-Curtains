module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'xPwQr6eLKQf9CFeneKnYUgtt',
        resolveLinks: true,
        // resolveRelations: ['sectors_list', 'clients_list', 'testimonials_list'],
        homeSlug: 'home',
        version: 'draft',
      },
    },
  ],
};
