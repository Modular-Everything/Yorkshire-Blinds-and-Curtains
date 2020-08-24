/* eslint-disable react/prop-types */
import React from 'react';
import marked from 'marked';
import parse from 'html-react-parser';
import SbEditable from 'storyblok-react';

// =====================
// Contact Us
// =====================

const ContactUs = ({ blok }) => {
  const { contact_us_info } = blok;

  return (
    <section className="contact-section style-two">
      <div className="auto-container">
        <div className="contact-info-three">
          <div className="row" style={{ justifyContent: 'center' }}>
            {contact_us_info.map((value, index) => {
              console.log(value);

              return (
                <SbEditable content={value}>
                  <div className="col-lg-4" key={index}>
                    <div className="content">
                      <div className="icon">
                        <span className={`flaticon-${value.contact_us_icon}`} />
                      </div>
                      <h4>{value.contact_us_title}</h4>
                      <div className="text">
                        {parse(marked(value.contact_us_content))}
                      </div>
                    </div>
                  </div>
                </SbEditable>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
