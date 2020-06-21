import React from 'react';
import PlaceholderImg from '../../../../static/images/background/bg-20.jpg';

// =====================
// Hero
// =====================

const Hero = (props) => {
  const { title, subtitle } = props;

  return (
    <section className="page-title" style={{ backgroundImage: `url(${PlaceholderImg})` }}>
      <div className="auto-container">
        <div className="content-box">
          <div className="content-wrapper">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <ul className="bread-crumb">
              <li className="home">
                <a href="index.html">
                  <span className="far fa-home"></span>
                </a>
              </li>
              <li>{subtitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
