/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import SbEditable from 'storyblok-react';
import Img from 'react-cool-img';

import ImageHandler from '../../../utils/ImageHandler';

// =====================
// About Us
// =====================

const AboutUs = ({ blok }) => {
  const {
    about_us_title,
    about_us_subtitle,
    about_us_copy,
    about_us_cta_label,
    about_us_cta_link,
    about_us_image,
    about_us_alt_layout,
  } = blok;

  if (about_us_alt_layout) {
    return (
      <section className="about-us-section-four">
        <div className="shape-one" />
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content wow fadeInLeft">
                {about_us_subtitle && <h4>{about_us_subtitle}</h4>}
                <h2>{about_us_title && about_us_title}</h2>
                <div className="text">{about_us_copy && about_us_copy}</div>
                <div className="link-btn">
                  {about_us_cta_link.id !== '' && (
                    <div className="link-btn">
                      {about_us_cta_link.linktype === 'url' ? (
                        <a
                          href={about_us_cta_link.cached_url}
                          className="theme-btn btn-style-two blolb"
                        >
                          <span>{about_us_cta_label}</span>
                        </a>
                      ) : (
                        <Link
                          to={
                            about_us_cta_link.cached_url
                              ? about_us_cta_link.cached_url
                              : '/'
                          }
                          className="theme-btn btn-style-two"
                        >
                          <span>{about_us_cta_label}</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-block wow fadeInRight">
                <div className="image">
                  {about_us_image.id !== null && (
                    <Img
                      placeholder={ImageHandler(
                        about_us_image.filename,
                        '15x15',
                      )}
                      src={ImageHandler(about_us_image.filename, '1080x1080')}
                      alt={about_us_image.alt || null}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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

                {about_us_cta_label.id !== '' && (
                  <div className="link-btn">
                    {about_us_cta_link.linktype === 'url' ? (
                      <a
                        href={about_us_cta_link.cached_url}
                        className="theme-btn btn-style-two blolb"
                      >
                        <span>{about_us_cta_label}</span>
                      </a>
                    ) : (
                      <Link
                        to={
                          about_us_cta_link.cached_url
                            ? about_us_cta_link.cached_url
                            : '/'
                        }
                        className="theme-btn btn-style-two"
                      >
                        <span>{about_us_cta_label}</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="image-block wow fadeInRight">
                <div className="image">
                  {about_us_image.id !== null && (
                    <Img
                      placeholder={ImageHandler(
                        about_us_image.filename,
                        '15x15',
                      )}
                      src={ImageHandler(about_us_image.filename, '500x500')}
                      alt={about_us_image.alt || null}
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
