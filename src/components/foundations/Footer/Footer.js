import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// =====================
// Footer
// =====================

const Footer = () => {
  const footerContent = useStaticQuery(graphql`
    query siteSettingsQueryAndSiteSettingsQuery {
      storyblokEntry(slug: { eq: "site-settings" }) {
        content
      }
    }
  `);

  let footerContentData;
  if (footerContent) {
    footerContentData = JSON.parse(footerContent.storyblokEntry.content);
  } else {
    return null;
  }

  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="column col-lg-6">
              <div className="row">
                <div className="col-md-8">
                  <div className="widget about-widget">
                    <h3 className="widget-title">{footerContentData.site_name}</h3>
                    <div className="text">
                      {footerContentData.site_description}
                    </div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="/">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column col-lg-6">
              <div className="row">
                <div className="footer-widget col-md-6">
                  <div className="links-widget pl-lg-5">
                    <h3 className="widget-title">What we do</h3>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="/">Architecture</a>
                        </li>
                        <li>
                          <a href="/">Home Lighting</a>
                        </li>
                        <li>
                          <a href="/">Landscape Design</a>
                        </li>
                        <li>
                          <a href="/">Floor Planning</a>
                        </li>
                        <li>
                          <a href="/">Interior Design</a>
                        </li>
                        <li>
                          <a href="/">Exterior Works</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-widget contact-widget pl-lg-4 col-md-6">
                  <h3 className="widget-title">contact us</h3>
                  <div className="widget-content">
                    <ul>
                      <li>
                        address: <br /> {footerContentData.company_address}
                      </li>
                      <li>
                        Phone: <br />
                        <a href={`tel:+${footerContentData.company_telephone_wakefield}`}>{`+${footerContentData.company_telephone_wakefield}`}</a>
                      </li>
                      <li>
                        Email: <br />
                        <a href={`mailto:${footerContentData.company_email}`}>{footerContentData.company_email}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="auto-container">
        <div className="footer-bottom">
          <div className="copyright">
            <a href="/">{footerContentData.site_name}</a> &copy; All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
