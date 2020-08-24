import React, { useEffect } from 'react';
import SbEditable from 'storyblok-react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'react-cool-img';
import ImageHandler from '../../../utils/ImageHandler';

import { WowReveal } from '../../../utils/wow';

// =====================
// Services
// =====================

const Services = ({ blok }) => {
  useEffect(() => {
    WowReveal();
  }, []);

  const DATA = useStaticQuery(graphql`
    query MetaTag {
      storyblokEntry(content: {}) {
        content
      }
    }
  `);

  let cov_image;
  if (DATA) {
    cov_image = JSON.parse(DATA.storyblokEntry.content);
  } else {
    return null;
  }

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
                  key={!content ? index : index}
                >
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      {!content ? (
                        <img src={cov_image.cover_image.filename} alt="" />
                      ) : (
                        content.service_meta_image && (
                          <Img
                            placeholder={ImageHandler(
                              content.service_meta_image.filename,
                              '15x15',
                            )}
                            src={ImageHandler(
                              content.service_meta_image.filename,
                              '500x400',
                            )}
                            alt={content.service_meta_image.alt || null}
                          />
                        )
                      )}
                    </div>
                    <div className="content">
                      <h4>
                        {!content ? `Service ${index + 1}` : content.seo_title}
                      </h4>
                      <div className="link-btn">
                        <Link to={node.full_slug} className="read-more-btn">
                          Read More
                        </Link>
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
