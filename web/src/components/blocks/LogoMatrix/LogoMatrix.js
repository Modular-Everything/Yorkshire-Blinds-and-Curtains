import React, { useEffect } from 'react';
import Flickity from 'flickity';

import PlaceholderImg from '../../../../static/images/resource/client-logo-1.jpg';
import PlaceholderImgAlt from '../../../../static/images/resource/client-logo-2.jpg';

// =====================
// Logo Matrix
// =====================

const LogoMatrix = () => {
  useEffect(() => {
    new Flickity('.theme_carousel', {
      accessibility: true,
      groupCells: true,
      wrapAround: true,
      draggable: '>1',
    });
  });

  return (
    <section className="clients-logo-section">
      <div className="auto-container">
        <div className="theme_carousel">
          <div className="image">
            <img src={PlaceholderImg} alt="" />
          </div>
          <div className="image">
            <img src={PlaceholderImgAlt} alt="" />
          </div>
          <div className="image">
            <img src={PlaceholderImg} alt="" />
          </div>
          <div className="image">
            <img src={PlaceholderImgAlt} alt="" />
          </div>
          <div className="image">
            <img src={PlaceholderImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMatrix;
