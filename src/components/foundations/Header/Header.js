import React, { useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import $ from 'jquery';

import IconBar from '../../../../static/images/icons/icon-bar.png';

// =====================
// Header
// =====================

const Header = () => {
  const DATA = useStaticQuery(graphql`
    query SiteSettingsQuery {
      storyblokEntry(slug: { eq: "site-settings" }) {
        content
      }
    }
  `);

  let doc;
  if (DATA) {
    doc = JSON.parse(DATA.storyblokEntry.content);
  } else {
    return null;
  }

  // ==

  useEffect(() => {
    function headerStyle() {
      const windowpos = $(window).scrollTop();
      const siteHeader = $('.main-header');
      const scrollLink = $('.scroll-to-top');
      const stickyHeader = $('.main-header .sticky-header');
      if (windowpos > 100) {
        siteHeader.addClass('fixed-header');
        stickyHeader.addClass('animated slideInDown');
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass('fixed-header');
        stickyHeader.removeClass('animated slideInDown');
        scrollLink.fadeOut(300);
      }
    }

    headerStyle();

    $(window).on('scroll', function scrollHeader() {
      headerStyle();
    });
  }, []);

  // ==

  const navContent = (
    <nav className="main-menu navbar-expand-md navbar-light">
      <div
        className="collapse navbar-collapse show clearfix"
        id="navbarSupportedContent"
      >
        <ul className="navigation clearfix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="dropdown">
            <button type="button">Services</button>
            <ul>
              <li>
                <Link to="/services/commercial">Commercial</Link>
              </li>
              <li>
                <Link to="/services/residential">Residential</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  // ==

  return (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box">
              <div className="logo">
                <a href="index.html" className="logo-box logo">
                  <h2>{doc.site_name}</h2>
                </a>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler">
                <img src={IconBar} alt="" />
              </div>
              {navContent}
            </div>
            <div className="navbar-right-info">
              <div className="phone-number">
                <i className="fas fa-phone" />
                <a href="tel:+1 (234)5018607">+1 (234) 501 8607</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo float-left">
            <a href="index.html" title="">
              <h2>{doc.site_name}</h2>
            </a>
          </div>
          <div className="float-right">{navContent}</div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon flaticon-remove" />
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <h2>{doc.site_name}</h2>
            </a>
          </div>
          <div className="menu-outer">
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="/">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="nav-overlay">
        <div className="cursor" />
        <div className="cursor-follower" />
      </div>
    </header>
  );
};

export default Header;
