import React, { useEffect } from 'react';
import { WowReveal } from '../../../utils/wow';

import PlaceholderImg from '../../../../static/images/resource/image-1.png';

// =====================
// About Us
// =====================

const AboutUs = () => {
  useEffect(() => {
    WowReveal();
  });

  return (
    <section className="about-us-section">
      <div className="shape-one" />
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content wow fadeInUp">
              <h2>
                The Most Talented Interior <br /> Designers &amp; Architects
              </h2>
              <h4>
                Sit eit malis civibus kase iuvaret blandit ipsum volumus indis{' '}
                <br /> referrentur euno utamur vivendo interpretaris.
              </h4>
              <div className="text">
                Beyond more stoic this along goodness this sed wow manatee
                mongos flusterd impressive man farcrud opened inside owin
                punitively around after wasteful telling spransac coldly
                spokeles client. Squid hesitantly gibbered some tyran nically
                talkative.
              </div>
              <div className="link-btn">
                <a href="/" className="theme-btn btn-style-two">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="image-block wow fadeInRight">
              <div className="image">
                <img src={PlaceholderImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
