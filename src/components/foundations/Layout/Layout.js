import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import Preloader from '../../blocks/Preloader';

// =====================
// Layout
// =====================

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

// =====================

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
