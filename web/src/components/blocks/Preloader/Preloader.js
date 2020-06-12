import React, { useEffect } from 'react';
import $ from 'jquery';
import { TweenMax } from 'gsap';

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
      $('.preloader-close').on('click', function () {
        $('.loader-wrap').delay(200).fadeOut(500);
      });
    }
  });

  return (
    <div class="loader-wrap">
      <div class="preloader">
        <div class="preloader-close">Preloader Close</div>
      </div>
      <div class="layer layer-one">
        <span class="overlay"></span>
      </div>
      <div class="layer layer-two">
        <span class="overlay"></span>
      </div>
      <div class="layer layer-three">
        <span class="overlay"></span>
      </div>
    </div>
  );
};

export default Preloader;
