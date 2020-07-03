/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Components from '../../storyblok/Storyblok';

import SEO from '../../blocks/SEO';

// ====

const Page = ({ blok, context, seo }) => {
  const { full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  if (!blok) return null;

  return (
    <Layout>
      <SEO
        page={{
          path: full_slug,
          title: seo_title,
          description: seo_description,
          image: seo_image || false,
        }}
      />

      {blok.body.map((node) =>
        React.createElement(Components(node.component), {
          key: node._uid,
          blok: node,
        }),
      )}
    </Layout>
  );
};

export default Page;
