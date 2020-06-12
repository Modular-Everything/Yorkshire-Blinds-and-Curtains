import React from 'react';
import Layout from '../components/foundations/Layout';

import BgImg from '../../static/images/background/bg-24.jpg';
import Logo from '../../static/images/logo.png';

const IndexPage = () => (
  <Layout pageClasses={['error-page']}>
    <div class="error-page" style={{ backgroundImage: `url(${BgImg})` }}>
      <div class="auto-container">
        <div class="content-box">
          <div class="logo">
            <a href="index.html">
              <img src={Logo} alt="" />
            </a>
          </div>

          <h1>404</h1>
          <h2>Page Not Found.</h2>
          <div class="text">The page you’re looking for has been removed or changed.</div>

          <div class="link-btn">
            <a href="index.html" class="theme-btn btn-style-two">
              <span>Go To Home Page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
