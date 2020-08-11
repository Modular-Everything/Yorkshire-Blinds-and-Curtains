/* eslint-disable react/prop-types */
import React from 'react';
import Image76 from '../../../../static/images/resource/image-76.jpg';
// =====================
// Contact Us
// =====================

const ContactUs = ({ blok }) => {
  const { contact_us_info } = blok;
  return (
    <section className="contact-section style-two">
      <div className="auto-container">
        <div className="contact-info-three">
          <div className="row">
            {contact_us_info.map((value, index) => (
              <div className="col-lg-4" key={index}>
                <div className="content">
                  <div className="icon"><span className={value.contact_us_icon}></span></div>
                  <h4>{value.contact_us_title}</h4>
                  <div className="text">{value.contact_us_content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wrapper-box mb-30">
          <div className="row">
            <div className="col-lg-5">
              <div className="image">
                <img src={Image76} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-area">
                <div className="sec-title small">
                  <span className="sec-title-dec-two"></span>
                  <h2>Do You need Our Help For <br /> The Next Project? Get In Touch!</h2>
                  <div className="text">Beyond more stoic this along goodness this sed ipsum mongos <br /> flusterd impressive man farcrud opened. </div>
                </div>
                <form method="post" action="sendemail.php" className="contact-form">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" name="name" placeholder="Name" required="" />
                    </div>

                    <div className="col-md-12 form-group">
                      <input type="email" name="email" placeholder="Email Address" required="" />
                    </div>

                    <div className="col-md-12 form-group">
                      <input type="text" name="subject" placeholder="Subject" required="" />
                    </div>

                    <div className="col-md-12 form-group">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>

                    <div className="col-md-12 form-group-two">
                      <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span>SEND MESSAGE</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
