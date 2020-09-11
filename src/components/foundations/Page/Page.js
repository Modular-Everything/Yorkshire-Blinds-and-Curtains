import React from 'react';

import SEO from '../../blocks/SEO';
import BGImg from '../../../../static/images/background/bg-24.jpg';

// ====

const Page = ({ blok, context, seo }) => {
  const { name, full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  if (!blok) return null;

  return (
    <>
      <SEO
        page={{
          path: full_slug,
          title: 'Coming Soon',
          description: seo_description,
          image: seo_image || false,
        }}
      />
      <div className="error-page" style={{ backgroundImage: `url(${BGImg})` }}>
        <div className="auto-container">
          <div className="content-box">
            <h1>Coming Soon</h1>
            <h2>Please check back shortly.</h2>
            <div className="text">
              Alternatively, you can contact us on{' '}
              <a href="tel:01484318333">01484 318333</a>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
