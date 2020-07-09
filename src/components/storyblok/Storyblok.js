import ComponentNotFound from './ComponentNotFound';
import Page from '../foundations/Page';
import Service from '../foundations/Service';

import Banner from '../blocks/Banner';
import AboutUs from '../blocks/AboutUs';
import ProjectsIndex from '../blocks/ProjectsIndex';
import Services from '../blocks/Services';
import Testimonials from '../blocks/Testimonials';

// ====

const ComponentList = {
  page: Page,
  service: Service,
  banner: Banner,
  about_us: AboutUs,
  projects_index: ProjectsIndex,
  services: Services,
  testimonials: Testimonials,
};

// ====

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
