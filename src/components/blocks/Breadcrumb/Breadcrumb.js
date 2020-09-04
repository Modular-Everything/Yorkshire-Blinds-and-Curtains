import React from 'react';
import SbEditable from 'storyblok-react';
import ImageHandler from '../../../utils/ImageHandler';

// ====

const Breadcrumb = ({ blok }) => {
  const { breadcrumb_title, breadcrumb_subtitle, breadcrumb_image } = blok;

  return (
    <SbEditable content={blok}>
      <section
        className="page-title"
        style={{
          backgroundImage: `url(${
            breadcrumb_image && ImageHandler(breadcrumb_image.filename)
          })`,
        }}
      >
        <div className="content-box">
          <div className="content-wrapper">
            <div className="title">
              <h1>{breadcrumb_title && breadcrumb_title}</h1>
            </div>
            {breadcrumb_subtitle && (
              <ul className="bread-crumb">
                <li className="home">
                  <a href="index.html">
                    <span className="far fa-home" />
                  </a>
                </li>
                <li>{breadcrumb_subtitle}</li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default Breadcrumb;
