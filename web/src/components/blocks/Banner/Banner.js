import React from 'react';

// =====================
// Banner
// =====================

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="swiper-container banner-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ backgroundImage: `url(assets/images/main-slider/image-1.jpg)` }}>
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Natural Materials Earthy Palettes</h1>
                  <div className="text">
                    Luxury Interior Designing lorem ipsum dolor sit amet consectetur adipisicing <br /> elit sed eiusmod
                    tempor incididunt labore dolore magna aliqua.{' '}
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one light">
                      <span>WHO WE ARE</span>
                    </a>
                    <a href="#" className="theme-btn btn-style-two light">
                      <span>WORKS WE DID</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide" style={{ backgroundImage: `url(assets/images/main-slider/image-2.jpg)` }}>
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Natural Materials Earthy Palettes</h1>
                  <div className="text">
                    Luxury Interior Designing lorem ipsum dolor sit amet consectetur adipisicing <br /> elit sed eiusmod
                    tempor incididunt labore dolore magna aliqua.{' '}
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one light">
                      <span>WHO WE ARE</span>
                    </a>
                    <a href="#" className="theme-btn btn-style-two light">
                      <span>WORKS WE DID</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide" style={{ backgroundImage: `url(assets/images/main-slider/image-3.jpg)` }}>
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>Natural Materials Earthy Palettes</h1>
                  <div className="text">
                    Luxury Interior Designing lorem ipsum dolor sit amet consectetur adipisicing <br /> elit sed eiusmod
                    tempor incididunt labore dolore magna aliqua.{' '}
                  </div>
                  <div className="link-box">
                    <a href="#" className="theme-btn btn-style-one light">
                      <span>WHO WE ARE</span>
                    </a>
                    <a href="#" className="theme-btn btn-style-two light">
                      <span>WORKS WE DID</span>
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
          </span>{' '}
        </div>
      </div>
    </section>
  );
};

export default Banner;
