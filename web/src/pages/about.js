import React from 'react';

import Layout from '../components/foundations/Layout';
import Hero from '../components/blocks/Hero';
import AboutUs from '../components/blocks/AboutUs';
import ProjectsIndex from '../components/blocks/ProjectsIndex';
import Services from '../components/blocks/Services';
import Testimonials from '../components/blocks/Testimonials';

const AboutPage = () => (
  <Layout>
    <Hero title="About Us" subtitle="Who We Are" />
    <AboutUs />
    <ProjectsIndex />
    <Services />
    <Testimonials />
  </Layout>
);

export default AboutPage;
