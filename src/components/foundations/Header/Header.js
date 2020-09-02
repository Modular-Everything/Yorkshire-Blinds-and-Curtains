import React, { useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import $ from 'jquery';

import IconBar from '../../../../static/images/icons/icon-bar.png';
import Logo from '../../../../static/images/logo.png';
import LogoTwo from '../../../../static/images/logo-two.png';

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

    if ($('.main-header li.dropdown ul').length) {
      $('.main-header .navigation li.dropdown').append(
        '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>',
      );
    }

    if ($('.mobile-menu').length) {
      const mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
      $('.sticky-header .main-menu').append(mobileMenuContent);

      // Dropdown Button
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });
      // Menu Toggle Btn
      $('.mobile-nav-toggler').on('click', function () {
        $('body').addClass('mobile-menu-visible');
      });

      // Menu Toggle Btn
      $(
        '.mobile-menu .menu-backdrop,.mobile-menu .close-btn,.scroll-nav li a',
      ).on('click', function () {
        $('body').removeClass('mobile-menu-visible');
      });
    }
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
                <Link to="/services/commercial-services">Commercial</Link>
              </li>
              <li>
                <Link to="/services/residential-services">Residential</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className="dropdown">
            <Link to="/contact-us">Contact Us</Link>
            <ul>
              <li>
                <Link to="/book-an-appointment">Book an Appointment</Link>
              </li>
            </ul>
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
                  <img src={LogoTwo} alt={doc.site_name} />
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
                <a href={`tel:${doc.company_telephone_huddersfield}`}>
                  {doc.company_telephone_huddersfield}
                </a>
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
              <img src={LogoTwo} alt={doc.site_name} />
            </a>
          </div>
          <div className="menu-outer" />
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
