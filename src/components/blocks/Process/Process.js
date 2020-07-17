import React from 'react';
import SbEditable from 'storyblok-react';

import ImageHandler from '../../../utils/ImageHandler';

// =====================
// Process
// =====================

const Process = ({ blok }) => {
  const { process_copy, process_proccesses, process_image } = blok;

  return (
    <SbEditable content={blok}>
      <section
        className="working-process-section style-two"
        style={{
          backgroundImage: `url(${ImageHandler(process_image.filename)})`,
        }}
      >
        <div className="auto-container">
          <div className="sec-title text-center light">
            <h2>The Process We Follow</h2>
          </div>
          <div className="row">
            {process_proccesses.map((node, index) => {
              return (
                <div className="process-block col-lg-4">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="count">
                        {index + 1}
                        <span>.</span>
                      </div>
                      <h4>{node.process_name && node.process_name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text">{process_copy && process_copy}</div>
        </div>
      </section>
    </SbEditable>
  );
};

export default Process;
