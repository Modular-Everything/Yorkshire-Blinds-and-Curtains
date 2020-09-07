import React from 'react';
import Img from 'react-cool-img';
import Moment from 'react-moment';
import ImageHandler from '../../../utils/ImageHandler';

import Layout from '../Layout';
import Richtext from '../../blocks/Richtext';
import Breadcrumb from '../../blocks/Breadcrumb';
import SEO from '../../blocks/SEO';

// ====

const BlogPost = ({ blok, context, seo }) => {
  const { full_slug, name, first_published_at } = context;
  const { seo_description, seo_image } = seo;

  const metaData = {
    breadcrumb_title: name,
    breadcrumb_subtitle: 'Blog',
    breadcrumb_image: blok.breadcrumb_image,
  };

  console.log(blok);

  return (
    <Layout>
      <SEO
        page={{
          path: full_slug,
          title: name,
          description: seo_description,
          image: seo_image || blok.breadcrumb_image || false,
        }}
      />

      <Breadcrumb blok={metaData} />

      <section className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 mx-auto content-side">
              <div className="blog-single-post">
                <div className="inner-box">
                  {blok.blog_header_image &&
                    blok.blog_header_image.filename !== '' && (
                      <div
                        className="image wow fadeInUp"
                        data-wow-duration="1500ms"
                      >
                        <Img
                          src={ImageHandler(
                            blok.blog_header_image.filename,
                            '1080x600',
                          )}
                          alt=""
                        />
                        <div className="date">
                          <Moment
                            format="MMMM Do, YYYY"
                            date={first_published_at}
                          />
                        </div>
                      </div>
                    )}
                  <div
                    className="content wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <h3>{name}</h3>
                    <div className="wrapper-box">
                      <ul className="post-meta">
                        <li>By {blok.post_author}</li>
                      </ul>
                    </div>
                    <div className="text">
                      <Richtext content={blok.blog_content} />
                    </div>
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

export default BlogPost;
