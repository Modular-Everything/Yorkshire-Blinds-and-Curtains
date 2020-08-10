/* eslint-disable react/prop-types */
import React from 'react';
import Image76 from '../../../../static/images/resource/image-76.jpg';
// =====================
// Contact Us
// =====================

const ContactUs = ({ blok }) => {
  const {
    company_address,
    company_inquire_email,
    company_project_email,
    company_telephone_number,
    company_toll_free_number } = blok;
  return (
    <section className="contact-section style-two">
      <div className="auto-container">
        <div className="contact-info-three">
          <div className="row">
            <div className="col-lg-4">
              <div className="content">
                <div className="icon"><span className="flaticon-interface"></span></div>
                <h4>Office Location</h4>
                <div className="text">63 Nelson Base, Madison <br /> New Jersey 08003</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <div className="icon"><span className="flaticon-technology"></span></div>
                <h4>Discuss on Phone</h4>
                <div className="text"><a href={`tel:${{ company_telephone_number }}`}>{company_telephone_number}</a> <br /> Toll Free <a href={`tel:${{ company_toll_free_number }}`}>{company_toll_free_number}</a></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content">
                <div className="icon"><span className="flaticon-envelopes"></span></div>
                <h4>Send an Email</h4>
                <div className="text"><a href={`mailto:${company_inquire_email}`}>{company_inquire_email}</a> <br /> <a href={`mailto:${company_project_email}`}>{company_project_email}</a></div>
              </div>
            </div>
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
