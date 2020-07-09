import React, { useEffect } from 'react';
import SbEditable from 'storyblok-react';

import { WowReveal } from '../../../utils/wow';
import PlaceholderImg from '../../../../static/images/resource/image-7.jpg';

// =====================
// Services
// =====================

const Services = ({ blok }) => {
  useEffect(() => {
    WowReveal();
  }, []);

  const { services_title, services_copy, services_selection } = blok;

  return (
    <SbEditable content={blok}>
      <section className="services-section">
        <div className="border-shape" />

        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="shape-one" />
            <span className="sec-title-dec" />
            <h2>{services_title}</h2>
            <div className="text">{services_copy}</div>
          </div>

          <div className="row">
            {services_selection.map((node, index) => {
              const { content } = node;
              return (
                <div
                  className="service-block-one col-lg-4 col-md-6"
                  key={!content ? index : content._uid}
                >
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      {!content ? (
                        <img src={PlaceholderImg} alt="" />
                      ) : (
                        content.service_meta_image && (
                          <img
                            src={content.service_meta_image.filename}
                            alt=""
                          />
                        )
                      )}
                    </div>
                    <div className="content">
                      <h4>
                        {!content ? `Service ${index + 1}` : content.seo_title}
                      </h4>
                      <div className="link-btn">
                        <a href="/" className="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
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

export default Services;
