import React from 'react';
import { Link } from 'gatsby';
import SbEditable from 'storyblok-react';
import Img from 'react-cool-img';

import PlaceholderImg from '../../../../static/images/resource/image-5.jpg';
import ImageHandler from '../../../utils/ImageHandler';

// =====================
// Projects Index
// =====================

const ProjectsIndex = ({ blok }) => {
  const { project } = blok;

  return (
    <SbEditable content={blok}>
      <section className="projects-section">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="row">
              {project.map((node) => {
                return (
                  <Link
                    to={`/${node.full_slug}`}
                    className="project-block-one col-lg-6"
                  >
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <Img
                          src={
                            node.content &&
                            node.content.service_meta_image.filename !== ''
                              ? ImageHandler(
                                  node.content.service_meta_image.filename,
                                  '600x700',
                                )
                              : PlaceholderImg
                          }
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="top-content">
                          <h3>{node.name}</h3>
                        </div>
                        <div className="text">View More</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SbEditable>
  );
};

export default ProjectsIndex;
