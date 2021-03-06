import React, { useEffect } from 'react';
import $ from 'jquery';
import { TweenMax, Expo } from 'gsap';

// =====================
// Preloader
// =====================

const Preloader = () => {
  useEffect(() => {
    $('.loader-wrap').delay(1000).fadeOut(500);

    TweenMax.to($('.loader-wrap .overlay'), 1.2, {
      force3D: true,
      left: '100%',
      ease: Expo.easeInOut,
    });

    if ($('.preloader-close').length) {
      $('.preloader-close').on('click', function closePreloader() {
        $('.loader-wrap').delay(200).fadeOut(500);
      });
    }

    setTimeout(() => $('.loader-wrap').remove(), 1500);
  }, []);

  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">Preloader Close</div>
      </div>
      <div className="layer layer-one">
        <span className="overlay" />
      </div>
      <div className="layer layer-two">
        <span className="overlay" />
      </div>
      <div className="layer layer-three">
        <span className="overlay" />
      </div>
    </div>
  );
};

export default Preloader;
