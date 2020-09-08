import ComponentNotFound from './ComponentNotFound';
import Page from '../foundations/Page';
import Appointment from '../foundations/Appointment';
import Service from '../foundations/Service';
import ServiceRoot from '../foundations/ServiceRoot';
import Project from '../foundations/Project';
import BlogRoot from '../foundations/BlogRoot';
import BlogPost from '../foundations/BlogPost';

import Banner from '../blocks/Banner';
import AboutUs from '../blocks/AboutUs';
import ProjectsIndex from '../blocks/ProjectsIndex';
import Services from '../blocks/Services';
import Testimonials from '../blocks/Testimonials';
import Breadcrumb from '../blocks/Breadcrumb';
import Process from '../blocks/Process';
import LogoMatrix from '../blocks/LogoMatrix';
import ButtonWithLink from '../blocks/ButtonWithLink';
import CTA from '../blocks/CTA';
import Gallery from '../blocks/Gallery';
import CommercialServices from '../blocks/CommercialServices';
import ContactUs from '../blocks/ContactUs';
import Video from '../blocks/Video';
import Map from '../blocks/Map';
import OpeningTimes from '../blocks/OpeningTimes';

// ====

const ComponentList = {
  page: Page,
  appointment: Appointment,
  service_primary: Page,
  service: Service,
  service_root: ServiceRoot,
  project: Project,
  banner: Banner,
  about_us: AboutUs,
  projects_index: ProjectsIndex,
  services: Services,
  testimonials: Testimonials,
  breadcrumb: Breadcrumb,
  process: Process,
  logo_matrix: LogoMatrix,
  button_with_link: ButtonWithLink,
  cta: CTA,
  gallery: Gallery,
  service_info: CommercialServices,
  contact_us: ContactUs,
  video: Video,
  map: Map,
  opening_times: OpeningTimes,
  blog_root: BlogRoot,
  blog_post: BlogPost,
};

// ====

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
