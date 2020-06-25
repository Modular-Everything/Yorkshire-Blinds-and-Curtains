/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Components from '../../storyblok/Storyblok';

// ====

const Page = (props) => {
  const { blok } = props;
  if (!blok) return null;

  return (
    <Layout>
      {blok.body.map((node) =>
        React.createElement(Components(node.component), {
          key: node._uid,
        }),
      )}
    </Layout>
  );
};

export default Page;
