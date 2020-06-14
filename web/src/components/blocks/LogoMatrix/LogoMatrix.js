import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel';

import PlaceholderImg from '../../../../static/images/resource/client-logo-1.jpg';
import PlaceholderImgAlt from '../../../../static/images/resource/client-logo-2.jpg';

// =====================
// Logo Matrix
// =====================

const LogoMatrix = () => {
  useEffect(() => {
    $('.theme_carousel').each(function (index) {
      const $owlAttr = {},
        $extraAttr = $(this).data('options');
      $.extend($owlAttr, $extraAttr);
      $(this).owlCarousel($owlAttr);
    });
  });

  return (
    <section className="clients-logo-section">
      <div className="auto-container">
        <div
          className="theme_carousel owl-theme owl-carousel"
          data-options='{"loop": true, "margin": 40, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "3" } , "992":{ "items" : "4" }, "1200":{ "items" : "5" }}}'
        >
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImg} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImgAlt} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImg} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImgAlt} alt="" />
            </div>
          </div>
          <div className="slide-item">
            <div className="image">
              <img src={PlaceholderImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMatrix;
