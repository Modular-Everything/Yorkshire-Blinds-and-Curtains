import React from 'react';
import SbEditable from 'storyblok-react';
import Img from 'react-cool-img';

import ImageHandler from '../../../utils/ImageHandler';

// =====================
// Logo Matrix
// =====================

const LogoMatrix = ({ blok }) => {
  const { matrix } = blok;

  return (
    <SbEditable content={blok}>
      <section className="clients-logo-section">
        <div className="auto-container">
          <div className="logo_matrix">
            {matrix.map((node, index) => {
              if (index > 4) return null;
              return (
                <div className="slide-item">
                  <div className="image">
                    <Img
                      placeholder={ImageHandler(node.filename, 'fit-in/15x15')}
                      src={ImageHandler(node.filename, 'fit-in/108x108')}
                      alt={node.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default LogoMatrix;
