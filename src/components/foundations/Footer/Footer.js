import React from 'react';

// =====================
// Footer
// =====================

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="column col-lg-6">
              <div className="row">
                <div className="col-md-8">
                  <div className="widget about-widget">
                    <h3 className="widget-title">About intervio</h3>
                    <div className="text">
                      Beyond more stoic this along goodness this sed wow manatee mongos flusterd impressive man farcrud
                      opened inside owin punitively around after.
                    </div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
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
                          <a href="#">Architecture</a>
                        </li>
                        <li>
                          <a href="#">Home Lighting</a>
                        </li>
                        <li>
                          <a href="#">Landscape Design</a>
                        </li>
                        <li>
                          <a href="#">Floor Planning</a>
                        </li>
                        <li>
                          <a href="#">Interior Design</a>
                        </li>
                        <li>
                          <a href="#">Exterior Works</a>
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
                        address: <br /> 63 Nelson Base, Florida
                      </li>
                      <li>
                        Phone: <br />
                        <a href="tel:+1(234)5018607">+1 (234) 501 8607</a>
                      </li>
                      <li>
                        Email: <br />
                        <a href="mailto:info@intervio.net">info@intervio.net</a>
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
            <a href="#">INTERVIO</a> - Design &amp; Architect &copy; All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
