import React from 'react';
import SbEditable from 'storyblok-react';

import Button from '../Button';
import ImageHandler from '../../../utils/ImageHandler';

// ====

const ButtonWithLink = ({ blok }) => {
  const {
    button_with_link_bg,
    button_with_link_link,
    button_with_link_desc,
    button_with_link_title,
    button_with_link_link_label,
  } = blok;

  return (
    <SbEditable content={blok}>
      <section
        className="newsletter-section style-two"
        style={{
          backgroundImage: `url(${ImageHandler(button_with_link_bg.filename)})`,
        }}
      >
        <div className="auto-container">
          <div className="row d-flex justify-content-center">
            <h4>{button_with_link_title}</h4>
          </div>
          <div className="row d-flex justify-content-center text">
            {button_with_link_desc && <p>{button_with_link_desc}</p>}
          </div>
          <div className="row d-flex justify-content-center">
            {button_with_link_title && (
              <Button
                label={button_with_link_link_label}
                link={button_with_link_link}
              />
            )}
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default ButtonWithLink;
