import React from 'react';

import Layout from '../components/foundations/Layout';
import Banner from '../components/blocks/Banner';
import AboutUs from '../components/blocks/AboutUs';
import ProjectsIndex from '../components/blocks/ProjectsIndex';

const IndexPage = () => (
  <Layout>
    <Banner />
    <AboutUs />
    <ProjectsIndex />
  </Layout>
);

export default IndexPage;
