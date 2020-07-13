import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import SbEditable from 'storyblok-react';

import { WowReveal } from '../../../utils/wow';
import PlaceholderImg from '../../../../static/images/resource/image-5.jpg';

// =====================
// Projects Index
// =====================

const ProjectsIndex = ({ blok }) => {
  useEffect(() => {
    WowReveal();
  }, []);

  const { project } = blok;

  return (
    <SbEditable content={blok}>
      <section className="projects-section">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="row">
              {project.map((node) => {
                const { content } = node;
                return (
                  <Link to="/" className="project-block-one col-lg-6">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img src={PlaceholderImg} alt="" />
                      </div>
                      <div className="content">
                        <div className="top-content">
                          <h5>timeless &amp; elegant</h5>
                          <h3>Residential Works</h3>
                        </div>
                        <div className="text">
                          Beyond more stoic this along goodness this <br />{' '}
                          manatee flusterd impressive farcrud
                        </div>
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
