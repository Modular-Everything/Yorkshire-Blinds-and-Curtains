/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import * as sanitizeHtml from 'sanitize-html';

import SbResolve from '../../../utils/SbResolve';

// ====

const Richtext = ({ content }) => {
  const dirty = SbResolve(content);
  const clean = sanitizeHtml(dirty, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'b',
      'i',
      'em',
      'strong',
      'a',
      'p',
      'u',
      'strike',
      'ul',
      'ol',
      'li',
      'hr',
      'img',
      'br',
    ],
    allowedAttributes: {
      a: ['href'],
      img: ['src'],
    },
    allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com'],
  });

  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default Richtext;

// ====

Richtext.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
