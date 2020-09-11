import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/blocks/SEO';
import Layout from '../components/foundations/Layout';
import BGImg from '../../static/images/background/bg-24.jpg';

// ====

const Page = () => {
  return (
    <Layout>
      <SEO
        page={{
          path: '404',
          title: '404',
          description: 'Page could not be found',
          image: false,
        }}
      />
      <div className="error-page" style={{ backgroundImage: `url(${BGImg})` }}>
        <div className="auto-container">
          <div className="content-box">
            <h1>404</h1>
            <h2>Page Not Found.</h2>
            <div className="text">
              The page you’re looking for has been removed or changed.
            </div>
            <div className="link-btn">
              <Link to="/" className="theme-btn btn-style-two">
                <span>Go To Home Page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
