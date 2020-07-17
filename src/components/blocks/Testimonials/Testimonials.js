import React, { useEffect } from 'react';
import Swiper from 'swiper';
import Img from 'react-cool-img';

import ImageHandler from '../../../utils/ImageHandler';
import Richtext from '../Richtext';

// =====================
// Testimonials
// =====================

const Testimonials = (props) => {
  useEffect(() => {
    const testimonialThumb = new Swiper('.testimonial-thumbs', {
      preloadImages: false,
      loop: true,
      speed: 2400,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 0,
      effect: 'slide',
    });

    new Swiper('.testimonial-content', {
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

  console.log(props);

  const { blok } = props;
  const { testimonial_bg, testimonials } = blok;

  return (
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
                  <div className="swiper-slide">
                    <div className="author-thumb">
                      <Img
                        src={ImageHandler(
                          node.author_thumb.filename,
                          '300x300',
                        )}
                        alt={`A testimonial from ${node.author_source}`}
                      />
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
                  <div className="swiper-slide">
                    <div className="testimonial-block">
                      <div className="inner-box">
                        <div className="quote">
                          <span className="flaticon-quote" />
                        </div>
                        <div className="text">
                          <Richtext content={node.testimonial_quote} />
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
  );
};

export default Testimonials;
