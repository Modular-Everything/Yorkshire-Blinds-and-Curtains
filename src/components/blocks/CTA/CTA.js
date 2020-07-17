import React from 'react';
import ImageHandler from '../../../utils/ImageHandler';

const CTA = ({ blok }) => {
  const { cta_bg, cta_copy } = blok;

  return (
    <section className="cta-section">
      <div className="auto-container">
        <div
          className="outer-box d-flex justify-content-center"
          style={{
            backgroundImage: `url(${
              cta_bg && ImageHandler(cta_bg.filename, '1300x310')
            })`,
          }}
        >
          <h2>{cta_copy && cta_copy}</h2>
          <div className="shape-one" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
