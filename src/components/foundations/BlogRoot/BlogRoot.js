import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'react-cool-img';
import ImageHandler from '../../../utils/ImageHandler';

import Layout from '../Layout';
import Breadcrumb from '../../blocks/Breadcrumb';
import SEO from '../../blocks/SEO';

// ====

const BlogRoot = ({ blok, context, seo }) => {
  const { full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  if (!blok) return null;

  const DATA = useStaticQuery(graphql`
    query BlogPosts {
      allStoryblokEntry(filter: { field_component: { eq: "blog_post" } }) {
        nodes {
          name
          first_published_at
          full_slug
          content
        }
      }
    }
  `);

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
            {DATA.allStoryblokEntry.nodes.map((node) => {
              const CONTENT = JSON.parse(node.content);

              return (
                <div className="news-block-three col-lg-4">
                  <div className="inner-box">
                    <div
                      className="image wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      {CONTENT.breadcrumb_image &&
                        CONTENT.breadcrumb_image.filename !== '' && (
                          <Img
                            src={ImageHandler(
                              CONTENT.breadcrumb_image.filename,
                              '1080x700',
                            )}
                            alt=""
                          />
                        )}
                      <div className="date">
                        <Moment
                          format="MMMM Do, YYYY"
                          date={node.first_published_at}
                        />
                      </div>
                    </div>
                    <div
                      className="content wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <h3>
                        <Link to={`/${node.full_slug}`}>{node.name}</Link>
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
                        <Link
                          to={`/${node.full_slug}`}
                          className="theme-btn btn-style-one"
                        >
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogRoot;
