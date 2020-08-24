/* eslint-disable camelcase */
import React from 'react';
import Swiper from 'swiper';
import { Link } from 'gatsby';
import AuthorThumb6 from '../../../../static/images/resource/author-thumb-6.jpg';
import Image103 from '../../../../static/images/resource/image-103.jpg';

const CommercialServices = ({ blok }) => {
  const { service_blok } = blok;
  const serviceReview = new Swiper('.service-review', {
    preloadImages: false,
    loop: true,
    speed: 2400,
    centeredSlides: true,
    spaceBetween: 0,
    effect: 'slide',
  });

  return (
    <section className="services-details">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8 content-side order-lg-2">
            <div className="image">
              <img src={Image103} alt="" />
            </div>
            <h3>
              We’re Most Talented Interior <br /> Designers &amp; Architects
            </h3>
            <h5>
              Sit eit malis civibus kase iuvaret blandit ipsum volumus indis
              referrentur euno utamur vivendo interpretaris adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              exercitation.
            </h5>
            <div className="text">
              Beyond more stoic this along goodness this sed wow manatee mongos
              flusterd impressive man farcrud opened inside owin punitively
              around after wasteful telling spransac coldly spokeles client.
              Squid hesitantly gibbered some tyran nically talkative jeepers
              crud. Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
              do eiusmod.
            </div>
            <div className="wrapper-box">
              <div className="row">
                {service_blok &&
                  service_blok.map((value, index) => {
                    console.log(value);
                    return (
                      <Link
                        to={`/${value.linkTo.story.full_slug}`}
                        className="col-md-6"
                      >
                        <div className="feature-block-two" key={index}>
                          <div className="inner-box">
                            <div className="icon">
                              <span className={value.icon} />
                            </div>
                            <h4>{value.title}</h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
            <div className="text">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia dese runt mollit anim id est laborum. Sed
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam aperiam.
            </div>
          </div>

          <aside className="col-lg-4">
            <div className="service-sidebar">
              <div className="widget widget_client_review">
                <h3 className="widget-title-two">Our Service Review</h3>
                <div className="widget-content">
                  <div className="swiper-container service-review">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="review-box">
                          <div className="text">
                            Habeo facete putent maluisset intell egam vixte
                            atyim prompta facilisiys interesset denique
                            prorquatos adipis cing pro, pro no odio modus. Mea
                            sed summo ipsum dolore.
                          </div>
                          <div className="author-box">
                            <div className="author-thumb">
                              <img src={AuthorThumb6} alt="" />
                            </div>
                            <div className="content">
                              <div className="quote">
                                <i className="flaticon-left-quote" />
                              </div>
                              <h4>thomas henry</h4>
                              <div className="designation">
                                Interior Design Customer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="review-box">
                          <div className="text">
                            Habeo facete putent maluisset intell egam vixte
                            atyim prompta facilisiys interesset denique
                            prorquatos adipis cing pro, pro no odio modus. Mea
                            sed summo ipsum dolore.
                          </div>
                          <div className="author-box">
                            <div className="author-thumb">
                              <img src={AuthorThumb6} alt="" />
                            </div>
                            <div className="content">
                              <div className="quote">
                                <i className="flaticon-left-quote" />
                              </div>
                              <h4>thomas henry</h4>
                              <div className="designation">
                                Interior Design Customer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CommercialServices;
