/* eslint-disable react/no-danger */
import React from 'react';
import * as sanitizeHtml from 'sanitize-html';

// ====

const Video = ({ blok }) => {
  const dirty = blok.embed_code;
  const clean = sanitizeHtml(dirty, {
    allowedTags: ['iframe'],
    allowedAttributes: {
      iframe: ['src', 'width', 'height'],
    },
    allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com'],
  });

  return (
    <div className="auto-container mt-30 mb-30">
      <div
        className="video-embed"
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    </div>
  );
};

export default Video;
