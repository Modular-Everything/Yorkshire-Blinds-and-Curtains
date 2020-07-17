/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import SbEditable from 'storyblok-react';

import { WowReveal } from '../../../utils/wow';

// =====================
// About Us
// =====================

const AboutUs = ({ blok }) => {
  useEffect(() => {
    WowReveal();
  }, []);

  const {
    about_us_title,
    about_us_subtitle,
    about_us_copy,
    about_us_cta_label,
    about_us_cta_link,
    about_us_image,
  } = blok;

  return (
    <SbEditable content={blok}>
      <section className="about-us-section">
        <div className="shape-one" />
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content wow fadeInUp">
                <h2>{about_us_title && about_us_title}</h2>
                {about_us_subtitle && <h4>{about_us_subtitle}</h4>}

                <div className="text">{about_us_copy && about_us_copy}</div>

                {about_us_cta_label && (
                  <div className="link-btn">
                    <a
                      href={about_us_cta_link}
                      className="theme-btn btn-style-two"
                    >
                      <span>{about_us_cta_label}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="image-block wow fadeInRight">
                <div className="image">
                  {about_us_image && (
                    <img
                      src={about_us_image.filename}
                      alt={about_us_image.alt}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default AboutUs;
