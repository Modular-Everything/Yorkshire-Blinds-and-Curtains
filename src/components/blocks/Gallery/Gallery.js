import React from 'react';
import Img from 'react-cool-img';
import SbEditable from 'storyblok-react';

import ImageHandler from '../../../utils/ImageHandler';

// ====

const Gallery = ({ blok }) => {
  const { gallery_title, gallery_text, images } = blok;

  return (
    <SbEditable content={blok}>
      <section className="portfolio-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sec-title-dec" />
            {gallery_title && <h2>{gallery_title}</h2>}
            {gallery_text && <div className="text">{gallery_text}</div>}
          </div>

          {images && images.filename !== '' && (
            <div className="items-container row clearfix">
              {images.map((node) => {
                return (
                  <div className="gallery-block masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image">
                        <Img
                          placeholder={ImageHandler(node.filename, '15x15')}
                          src={ImageHandler(node.filename, '500x500')}
                          alt={node.alt || null}
                        />
                        {/* <div className="overlay">
                          <a
                            data-fancybox="example gallery"
                            href={node.filename}
                            className="zoom-btn"
                          >
                            <span className="flaticon-add" />
                          </a>
                          <span className="border-one" />
                          <span className="border-two" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </SbEditable>
  );
};

export default Gallery;
