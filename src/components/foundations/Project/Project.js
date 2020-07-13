import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Components from '../../storyblok/Storyblok';

import SEO from '../../blocks/SEO';

// ====

const Project = ({ blok, context, seo }) => {
  const { full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  if (!blok) return null;

  const { project_meta_image, project_meta_description } = blok;

  return (
    <Layout>
      <SEO
        page={{
          path: full_slug,
          title: seo_title,
          description: seo_description || project_meta_description,
          image: seo_image || project_meta_image || false,
        }}
      />

      {blok.body &&
        blok.body.map((node) =>
          React.createElement(Components(node.component), {
            key: node._uid,
            blok: node,
          }),
        )}
    </Layout>
  );
};

export default Project;
