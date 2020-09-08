import React from 'react';
import { Link } from 'gatsby';
import Img from 'react-cool-img';
import ImageHandler from '../../../utils/ImageHandler';

// =====================
// Services
// =====================

const Services = ({ title, thumb, link }) => {
  return (
    <div className="service-block-one col-lg-4 col-md-6">
      <Link to={`/${link}`} className="read-more-btn">
        <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
          {thumb && thumb.filename !== '' && (
            <div className="image">
              <Img
                placeholder={ImageHandler(thumb.filename, '15x15')}
                src={ImageHandler(thumb.filename, '800x500')}
                alt={thumb.alt || null}
              />
            </div>
          )}
          <div className="content">
            <h4>{title}</h4>
            <div className="link-btn">Read More</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Services;
