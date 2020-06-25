const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/pages/sb-page.js');
    resolve(
      graphql(
        `
          {
            allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const entries = result.data.allStoryblokEntry.edges;
        entries.forEach((entry) => {
          const pagePath =
            entry.node.full_slug === 'home' ? '' : `${entry.node.full_slug}/`;

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node,
            },
          });
        });
      }),
    );
  });
};
