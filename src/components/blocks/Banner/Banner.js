import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Link } from 'gatsby';
import SbEditable from 'storyblok-react';

// =====================
// Banner
// =====================

const Banner = ({ blok }) => {
  const { slides } = blok;
  const single = slides.length === 1;

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const SwipeContainer = new Swiper('.banner-slider', {
      preloadImages: true,
      loop: !single,
      grabCursor: !single,
      centeredSlides: false,
      resistance: true,
      resistanceRatio: single ? 0 : 0.6,
      speed: 1400,
      spaceBetween: 0,
      parallax: true,
      effect: 'slide',
      autoHeight: !single,
      autoplay: !single,
      navigation: {
        nextEl: '.banner-slider-button-next',
        prevEl: '.banner-slider-button-prev',
      },
    });
  }, []);

  return (
    <SbEditable content={blok}>
      <section className="banner-section">
        <div className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            {slides.map((node) => {
              const { title, copy, cta, link } = node;
              const innerContent = !!(title || copy || cta || link.url);

              return (
                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${node.image.filename})` }}
                >
                  <div className="content-outer">
                    <div className="content-box">
                      {innerContent && (
                        <div className="inner">
                          {title && <h1>{title}</h1>}
                          {copy && <div className="text">{copy}</div>}
                          {link.cached_url && (
                            <div className="link-box">
                              <Link
                                to={link.cached_url}
                                className="theme-btn btn-style-one light"
                              >
                                <span>{cta || `FIND OUT MORE`}</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!single && (
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
        )}
      </section>
    </SbEditable>
  );
};

export default Banner;
