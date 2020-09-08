/* eslint-disable camelcase */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../../blocks/SEO';
import Components from '../../storyblok/Storyblok';
import Services from '../../blocks/Services';

// ====

const ServiceRoot = ({ blok, context, seo }) => {
  const { name, full_slug } = context;
  const { seo_title, seo_description, seo_image } = seo;

  const pageParent = context.parent_id;

  if (!blok) return null;

  const DATA = useStaticQuery(graphql`
    query Services {
      allStoryblokEntry(filter: { field_component: { eq: "service" } }) {
        nodes {
          name
          slug
          full_slug
          parent_id
          content
        }
      }
    }
  `);

  const PAGE_ARRAY = DATA.allStoryblokEntry.nodes.map((node) => node);
  const PAGE_DATA = PAGE_ARRAY.filter(
    ({ parent_id }) => parent_id === pageParent,
  );

  return (
    <Layout>
      <SEO
        page={{
          path: full_slug,
          title: seo_title || name,
          description: seo_description,
          image: seo_image || false,
        }}
      />

      {blok.body &&
        blok.body.map((node) =>
          React.createElement(Components(node.component), {
            key: node._uid,
            blok: node,
          }),
        )}

      <section className="services-section">
        <div className="border-shape" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="shape-one" />
            <span className="sec-title-dec" />
            <h2>{blok.page_intro_title}</h2>
            <div className="text">{blok.page_intro_copy}</div>
          </div>
          <div className="row">
            {PAGE_DATA.map((node) => {
              const ITEM_DATA = JSON.parse(node.content);
              console.log(ITEM_DATA);

              return (
                <Services
                  title={node.name}
                  thumb={ITEM_DATA.service_meta_image}
                  link={node.full_slug}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceRoot;
