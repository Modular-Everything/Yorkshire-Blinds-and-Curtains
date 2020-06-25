import React, { useEffect } from 'react';
import { WowReveal } from '../../../utils/wow';

import PlaceholderImg from '../../../../static/images/resource/image-7.jpg';

// =====================
// Services
// =====================

const Services = () => {
  useEffect(() => {
    WowReveal();
  });

  return (
    <section className="services-section">
      <div className="border-shape" />
      <h1 className="big-title">What we do</h1>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="shape-one" />
          <span className="sec-title-dec"></span>
          <h2>Luxurious &amp; Innovative Services</h2>
          <div className="text">
            Flusterd impressive man farcrud open inside owin punitively around
            after wasteful telling spran <br />
            coldly spokeles client. Squid hesitantly gibbered some tyran nically
            talkative crud.
          </div>
        </div>
        <div className="row">
          <div className="service-block-one col-lg-4 col-md-6">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
              <div className="content">
                <h4>Home Decoration</h4>
                <div className="link-btn">
                  <a href="/" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one col-lg-4 col-md-6">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
              <div className="content">
                <h4>Renovation Ideas</h4>
                <div className="link-btn">
                  <a href="/" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one col-lg-4 col-md-6">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
              <div className="content">
                <h4>Lighting Styles</h4>
                <div className="link-btn">
                  <a href="/" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one col-lg-4 col-md-6">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
              <div className="content">
                <h4>Architect Design</h4>
                <div className="link-btn">
                  <a href="/" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one col-lg-4 col-md-6">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
              <div className="content">
                <h4>Exterior Design</h4>
                <div className="link-btn">
                  <a href="/" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one col-lg-4 col-md-6">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
              <div className="content">
                <h4>Interior Planning</h4>
                <div className="link-btn">
                  <a href="/" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
