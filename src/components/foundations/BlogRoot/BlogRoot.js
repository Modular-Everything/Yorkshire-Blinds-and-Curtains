import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Breadcrumb from '../../blocks/Breadcrumb';
import SEO from '../../blocks/SEO';

// ====

const BlogRoot = ({ blok, context, seo }) => {
  const { full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  if (!blok) return null;

  return (
    <Layout>
      <SEO
        page={{
          path: full_slug,
          title: seo_title,
          description: seo_description,
          image: seo_image || false,
        }}
      />

      <Breadcrumb blok={blok} />

      <section className="blog-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="news-block-three col-lg-4">
              <div className="inner-box">
                <div className="image wow fadeInUp" data-wow-duration="1500ms">
                  <img src="assets/images/resource/image-50.jpg" alt="" />
                  <div className="date">March 18, 2020</div>
                </div>
                <div
                  className="content wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <h3>
                    <a href="blog-details.html">
                      Design of Thoughts: <br />
                      Planning to Performing
                    </a>
                  </h3>
                  <div className="wrapper-box">
                    <ul className="post-meta">
                      <li>
                        Posted by
                        <br />
                        John Beevers
                      </li>
                    </ul>
                  </div>
                  <div className="link-btn">
                    <a
                      href="blog-details.html"
                      className="theme-btn btn-style-one"
                    >
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogRoot;
