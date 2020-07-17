/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import Img from 'react-cool-img';
import SbEditable from 'storyblok-react';

import ImageHandler from '../../../utils/ImageHandler';
import Richtext from '../Richtext';

// =====================
// Testimonials
// =====================

const Testimonials = ({ blok }) => {
  useEffect(() => {
    const totalSlides = $('.swiper-container').length;

    const testimonialThumb = new Swiper('.testimonial-thumbs', {
      preloadImages: false,
      loop: true,
      speed: 2400,
      slidesPerView: totalSlides >= 3 ? 3 : totalSlides,
      centeredSlides: true,
      spaceBetween: 0,
      effect: 'slide',
    });
    const testimonialContent = new Swiper('.testimonial-content', {
      preloadImages: false,
      loop: true,
      speed: 2400,
      spaceBetween: 0,
      effect: 'slide',
      thumbs: {
        swiper: testimonialThumb,
      },
    });
  }, []);

  const { testimonial_bg, testimonials } = blok;

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
                {testimonials.map((node) => {
                  return (
                    <div className="swiper-slide" key={node.uid}>
                      <div className="author-thumb">
                        {node.author_thumb && (
                          <Img
                            placeholder={ImageHandler(
                              node.author_thumb.filename,
                              '15x15',
                            )}
                            src={ImageHandler(
                              node.author_thumb.filename,
                              '300x300',
                            )}
                            alt={`A testimonial from ${node.author_source}`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="swiper-container testimonial-content">
              <div className="swiper-wrapper">
                {testimonials.map((node) => {
                  return (
                    <div className="swiper-slide" key={node.uid}>
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote">
                            <span className="flaticon-quote" />
                          </div>
                          <div className="text">
                            {node.testimonial_quote && (
                              <Richtext content={node.testimonial_quote} />
                            )}
                          </div>
                          <div className="author-title">
                            {node.author_source}{' '}
                            {node.author_company && (
                              <span>{node.author_company}</span>
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
