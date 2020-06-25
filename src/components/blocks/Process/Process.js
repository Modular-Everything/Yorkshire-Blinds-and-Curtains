import React from 'react';
import BgImg from '../../../../static/images/background/bg-22.jpg';

// =====================
// Process
// =====================

const Process = () => {
  return (
    <section className="working-process-section style-two" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="auto-container">
        <div className="sec-title text-center light">
          <h2>The Process We Follow</h2>
        </div>
        <div className="row">
          <div className="process-block col-lg-4">
            <div className="inner-box wow fadeInLeft" data-wow-duration="1500ms">
              <div className="icon">
                <span className="flaticon-school-material"></span>
              </div>
              <div className="content">
                <div className="count">
                  1<span>.</span>
                </div>
                <h4>Concept Creation</h4>
              </div>
            </div>
          </div>
          <div className="process-block col-lg-4">
            <div className="inner-box">
              <div className="icon">
                <span className="flaticon-paint-palette"></span>
              </div>
              <div className="content">
                <div className="count">
                  2<span>.</span>
                </div>
                <h4>Planning &amp; Selections</h4>
              </div>
            </div>
          </div>
          <div className="process-block col-lg-4">
            <div className="inner-box wow fadeInRight" data-wow-duration="1500ms">
              <div className="icon">
                <span className="flaticon-like"></span>
              </div>
              <div className="content">
                <div className="count">
                  3<span>.</span>
                </div>
                <h4>Development Styling</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="text">
          Along goodness hey this sed ipsum dui manatee for the one asfer since flustered <br />
          impressive your longtails opened inside owing ipsum epunitively. Nehil moderatius <br />
          vimpot dish euitas iuvaret sed ipsum reformid.{' '}
        </div>
      </div>
    </section>
  );
};

export default Process;
