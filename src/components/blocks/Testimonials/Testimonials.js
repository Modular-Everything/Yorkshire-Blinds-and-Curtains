/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import Img from 'react-cool-img';
import SbEditable from 'storyblok-react';

import ImageHandler from '../../../utils/ImageHandler';
import Richtext from '../Richtext';
import PlaceholderUser from '../../../../static/images/placeholderuser.jpg';

// =====================
// Testimonials
// =====================

const Testimonials = ({ blok }) => {
  const { testimonial_bg, testimonials } = blok;

  useEffect(() => {
    const testimonialContent = new Swiper('.testimonial-content', {
      preloadImages: false,
      loop: true,
      speed: 2400,
      spaceBetween: 0,
      autoplay: {
        delay: 5000,
      },
      effect: 'slide',
    });
  }, []);

  return (
    <SbEditable content={blok}>
      <section className="testimonial-section">
        <div
          className="sec-bg"
          style={{ backgroundImage: `url(${testimonial_bg.filename})` }}
        />

        <div className="auto-container">
          <div className="testimonial-carousel">
            <div className="swiper-container testimonial-thumbs">
              <div className="swiper-wrapper">
                {/* {testimonials.map((node) => {
                  return (
                    <div className="swiper-slide" key={node.uid}>
                      <div className="author-thumb">
                        {node.source.content.author_thumb && (
                          <Img
                            placeholder={ImageHandler(
                              node.source.content.author_thumb.filename,
                              '15x15',
                            )}
                            src={ImageHandler(
                              node.source.content.author_thumb.filename,
                              '300x300',
                            )}
                            alt={`A testimonial from ${node.author_source}`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })} */}
              </div>
            </div>

            <div className="swiper-container testimonial-content">
              <div className="swiper-wrapper">
                {testimonials.map((node) => {
                  if (!node.source.content) return null;

                  return (
                    <div className="swiper-slide" key={node.uid}>
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote">
                            <span className="flaticon-quote" />
                          </div>
                          <div className="text">
                            {node.source.content.testimonial_quote && (
                              <Richtext
                                content={node.source.content.testimonial_quote}
                              />
                            )}
                          </div>
                          <div className="author-title">
                            {node.source.content.author_source}{' '}
                            {node.source.content.author_company && (
                              <span>{node.source.content.author_company}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default Testimonials;
