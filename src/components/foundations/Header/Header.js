import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import $ from 'jquery';

import Logo from '../../../../static/images/logo.png';
import LogoTwo from '../../../../static/images/logo-two.png';
import IconBar from '../../../../static/images/icons/icon-bar.png';

// =====================
// Header
// =====================

const Header = () => {
  const DATA = useStaticQuery(graphql`
    query MyQuery {
      __typename ## Placeholder value
    }
  `);

  console.log(DATA);

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

  const navContent = (
    <nav className="main-menu navbar-expand-md navbar-light">
      <div
        className="collapse navbar-collapse show clearfix"
        id="navbarSupportedContent"
      >
        <ul className="navigation clearfix">
          <li className="dropdown">
            <a href="index.html">Home</a>
            <ul>
              <li>
                <a href="index.html">Home One</a>
              </li>
              <li>
                <a href="index-2.html">Home Two</a>
              </li>
              <li>
                <a href="index-3.html">Home Three</a>
              </li>
              <li>
                <a href="index-4.html">Home Four</a>
              </li>
              <li>
                <a href="index-5.html">Home Five</a>
              </li>
              <li>
                <a href="index-6.html">Home Six</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li className="dropdown">
            <a href="/">Services</a>
            <ul>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="interior.html">Interior Design</a>
              </li>
              <li>
                <a href="architecture.html">Architecture Design</a>
              </li>
              <li>
                <a href="renovation.html">Renovation</a>
              </li>
              <li>
                <a href="lighting.html">Lighting</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/">Pages</a>
            <ul>
              <li>
                <a href="history.html">History</a>
              </li>
              <li>
                <a href="team.html">Our Team</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="404.html">404</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/">Portfolio</a>
            <ul>
              <li>
                <a href="portfolio-1.html">Portfolio Style 01</a>
              </li>
              <li>
                <a href="portfolio-2.html">Portfolio Style 02</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/">Blog</a>
            <ul>
              <li>
                <a href="blog.html">Blog Grid</a>
              </li>
              <li>
                <a href="blog-2.html">Blog Classic</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/">Contact</a>
            <ul>
              <li>
                <a href="contact-1.html">Contact 01</a>
              </li>
              <li>
                <a href="contact-2.html">Contact 02</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <header className="main-header header-style-one">
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box">
              <div className="logo">
                <a href="index.html" className="logo-box logo">
                  <h2>Yorkshire Blinds &amp; Curtains</h2>
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
              <img src={LogoTwo} alt="" title="" />
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
              <img src={Logo} alt="" title="" />
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
