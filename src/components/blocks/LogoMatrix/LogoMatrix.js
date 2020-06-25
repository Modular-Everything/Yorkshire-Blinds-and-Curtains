import React from 'react';

import PlaceholderImg from '../../../../static/images/resource/client-logo-1.jpg';
import PlaceholderImgAlt from '../../../../static/images/resource/client-logo-2.jpg';

// =====================
// Logo Matrix
// =====================

const LogoMatrix = () => {
  return (
    <section className="clients-logo-section">
      <div className="auto-container">
        <div className="logo_matrix">
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImg} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImgAlt} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImg} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImgAlt} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMatrix;
