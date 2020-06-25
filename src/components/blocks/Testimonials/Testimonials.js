import React, { useEffect } from 'react';
import Swiper from 'swiper';

import BgImg from '../../../../static/images/background/bg-2.jpg';
import AuthorThumb from '../../../../static/images/resource/author-thumb-1.jpg';

// =====================
// Testimonials
// =====================

const Testimonials = () => {
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
  });

  return (
    <section className="testimonial-section">
      <div className="sec-bg" style={{ backgroundImage: `url(${BgImg})` }} />
      <div className="auto-container">
        <div className="testimonial-carousel">
          <div className="swiper-container testimonial-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="author-thumb">
                  <img src={AuthorThumb} alt="" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="author-thumb">
                  <img src={AuthorThumb} alt="" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="author-thumb">
                  <img src={AuthorThumb} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-container testimonial-content">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="quote">
                      <span className="flaticon-quote"></span>
                    </div>
                    <div className="text">
                      Habeo facete putent maluisset intellegam vixte vim prompta
                      facilisiys interesset denique pro torquatos adipiscing
                      pro, pro no odio modus. Mea malis summo ipsum dolore
                      assueverit nec facer imperdiet postea laoreet vulputate
                      has beyond more stoic.
                    </div>
                    <div className="author-title">
                      thomas henry <span>thomas henry</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="quote">
                      <span className="flaticon-quote"></span>
                    </div>
                    <div className="text">
                      Habeo facete putent maluisset intellegam vixte vim prompta
                      facilisiys interesset denique pro torquatos adipiscing
                      pro, pro no odio modus. Mea malis summo ipsum dolore
                      assueverit nec facer imperdiet postea laoreet vulputate
                      has beyond more stoic.
                    </div>
                    <div className="author-title">
                      thomas henry <span>thomas henry</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="quote">
                      <span className="flaticon-quote"></span>
                    </div>
                    <div className="text">
                      Habeo facete putent maluisset intellegam vixte vim prompta
                      facilisiys interesset denique pro torquatos adipiscing
                      pro, pro no odio modus. Mea malis summo ipsum dolore
                      assueverit nec facer imperdiet postea laoreet vulputate
                      has beyond more stoic.
                    </div>
                    <div className="author-title">
                      thomas henry <span>thomas henry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
