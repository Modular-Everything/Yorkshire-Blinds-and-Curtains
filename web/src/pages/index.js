import React from 'react';

import Layout from '../components/foundations/Layout';
import Banner from '../components/blocks/Banner';
import AboutUs from '../components/blocks/AboutUs';
import ProjectsIndex from '../components/blocks/ProjectsIndex';
import LogoMatrix from '../components/blocks/LogoMatrix';
import Services from '../components/blocks/Services';

const IndexPage = () => (
  <Layout>
    <Banner />
    <AboutUs />
    <ProjectsIndex />
    <LogoMatrix />
    <Services />
  </Layout>
);

export default IndexPage;
