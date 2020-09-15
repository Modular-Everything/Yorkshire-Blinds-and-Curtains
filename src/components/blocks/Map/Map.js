import React from 'react';
import Img from 'react-cool-img';
import SbEditable from 'storyblok-react';

import ImageHandler from '../../../utils/ImageHandler';

// ====

const Map = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <a href={blok.map_link.url}>
        <Img src={ImageHandler(blok.map_image.filename)} alt="Google Map" />
      </a>
    </SbEditable>
  );
};

// ====

export default Map;
