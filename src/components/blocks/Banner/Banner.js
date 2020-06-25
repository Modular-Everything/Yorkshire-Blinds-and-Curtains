import React, { useEffect } from 'react';
import Swiper from 'swiper';

import BgImg from '../../../../static/images/main-slider/image-1.jpg';

// =====================
// Banner
// =====================

const Banner = () => {
  useEffect(() => {
    new Swiper('.banner-slider', {
      preloadImages: false,
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      resistance: true,
      resistanceRatio: 0.6,
      speed: 1400,
      spaceBetween: 0,
      parallax: false,
      effect: 'slide',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.banner-slider-button-next',
        prevEl: '.banner-slider-button-prev',
      },
    });
  });

  return (
    <section className="banner-section">
      <div className="swiper-container banner-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Natural Materials Earthy Palettes</h1>
                  <div className="text">
                    Luxury Interior Designing lorem ipsum dolor sit amet consectetur adipisicing <br /> elit sed eiusmod
                    tempor incididunt labore dolore magna aliqua.
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one light">
                      <span>WHO WE ARE IS WHAT WE DO</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Natural Materials Earthy Palettes</h1>
                  <div className="text">
                    Luxury Interior Designing lorem ipsum dolor sit amet consectetur adipisicing <br /> elit sed eiusmod
                    tempor incididunt labore dolore magna aliqua.
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one light">
                      <span>WHO WE ARE IS WHAT WE DO</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Natural Materials Earthy Palettes</h1>
                  <div className="text">
                    Luxury Interior Designing lorem ipsum dolor sit amet consectetur adipisicing <br /> elit sed eiusmod
                    tempor incididunt labore dolore magna aliqua.
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one light">
                      <span>WHO WE ARE IS WHAT WE DO</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-slider-nav">
        <div className="banner-slider-control banner-slider-button-prev">
          <span>
            <i className="far fa-angle-left" />
          </span>
        </div>
        <div className="banner-slider-control banner-slider-button-next">
          <span>
            <i className="far fa-angle-right" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
