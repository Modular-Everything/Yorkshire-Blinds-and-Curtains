import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Components from '../../storyblok/Storyblok';
import AppointmentForm from '../../blocks/AppointmentForm';

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
          title: 'Book an Appointment',
          description: seo_description,
          image: seo_image || false,
        }}
      />

      {blok.body &&
        blok.body.map((node) =>
          React.createElement(Components(node.component), {
            key: node._uid,
            blok: node,
          }),
        )}

      <AppointmentForm />
    </Layout>
  );
};

export default Page;
