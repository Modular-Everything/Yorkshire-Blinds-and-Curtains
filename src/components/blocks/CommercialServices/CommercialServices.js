/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'gatsby';
import Img from 'react-cool-img';

import ImageHandler from '../../../utils/ImageHandler';
import Placeholder from '../../../../static/images/resource/image-104.jpg';

// ====

const CommercialServices = ({ blok }) => {
  const { service_blok } = blok;

  return (
    <section className="services-details">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8 content-side order-lg-2">
            <h3>Residential Services</h3>
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
          </div>
        </div>

        <div className="row">
          <div className="wrapper-box">
            <div className="row">
              {service_blok &&
                service_blok.map((node, index) => {
                  return (
                    <div className="service-block-one col-lg-4 col-md-6">
                      <Link
                        to={`/${
                          node.linkTo.story && node.linkTo.story.full_slug
                        }`}
                        className="read-more-btn"
                      >
                        <div
                          className="inner-box wow fadeInUp"
                          data-wow-duration="1500ms"
                        >
                          <div className="image">
                            {node.linkTo.story &&
                            node.linkTo.story.content.service_meta_image
                              .filename !== '' ? (
                              <Img
                                placeholder={ImageHandler(
                                  node.linkTo.story.content.service_meta_image
                                    .filename,
                                  '15x15',
                                )}
                                src={ImageHandler(
                                  node.linkTo.story.content.service_meta_image
                                    .filename,
                                  '500x300',
                                )}
                                alt={
                                  node.linkTo.story.content.service_meta_image
                                    .alt || null
                                }
                              />
                            ) : (
                              <Img src={Placeholder} alt="" />
                            )}
                          </div>
                          <div className="content">
                            <h4>
                              {!node.linkTo.story
                                ? `Service ${index + 1}`
                                : node.linkTo.story.name}
                            </h4>
                            <div className="link-btn">Find Out More</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ====

export default CommercialServices;
