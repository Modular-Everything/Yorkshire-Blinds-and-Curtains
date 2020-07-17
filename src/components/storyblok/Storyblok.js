import ComponentNotFound from './ComponentNotFound';
import Page from '../foundations/Page';
import Service from '../foundations/Service';
import Project from '../foundations/Project';

import Banner from '../blocks/Banner';
import AboutUs from '../blocks/AboutUs';
import ProjectsIndex from '../blocks/ProjectsIndex';
import Services from '../blocks/Services';
import Testimonials from '../blocks/Testimonials';
import Breadcrumb from '../blocks/Breadcrumb';

// ====

const ComponentList = {
  page: Page,
  service: Service,
  project: Project,
  banner: Banner,
  about_us: AboutUs,
  projects_index: ProjectsIndex,
  services: Services,
  testimonials: Testimonials,
  breadcrumb: Breadcrumb,
};

// ====

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
