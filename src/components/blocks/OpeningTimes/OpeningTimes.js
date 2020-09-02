import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'react-cool-img';

import ImageHandler from '../../../utils/ImageHandler';

// ====

const OpeningTimes = ({ blok }) => {
  const DATA = useStaticQuery(graphql`
    query OpeningTimesQuery {
      storyblokEntry(slug: { eq: "site-settings" }) {
        content
      }
    }
  `);

  let doc;
  if (DATA) {
    doc = JSON.parse(DATA.storyblokEntry.content);
  } else {
    return null;
  }

  return (
    <section className="contact-section style-two">
      <div className="auto-container">
        <div className="contact-info-two">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h2>Opening Times</h2>
                <table>
                  <tbody>
                    {doc.opening_times_table.tbody.map((tr) => (
                      <tr>
                        {tr.body.map((td) => (
                          <td>{td.value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {doc.opening_times_image.filename !== '' && (
              <div className="col-lg-6 d-lg-block d-none">
                <Img
                  src={ImageHandler(
                    doc.opening_times_image.filename,
                    '1080x800',
                  )}
                  alt="Google Map"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ====

export default OpeningTimes;
