/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Components from '../../storyblok/Storyblok';

import SEO from '../../blocks/SEO';

// ====

const Service = ({ blok, context, seo }) => {
  const { name, full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  if (!blok) return null;

  const { service_meta_image } = blok;

  return (
    <Layout>
      <SEO
        page={{
          path: full_slug,
          title: seo_title || name,
          description: seo_description,
          image: seo_image || service_meta_image || false,
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

export default Service;
