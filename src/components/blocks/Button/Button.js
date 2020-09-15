import React from 'react';
import { Link } from 'gatsby';

const Button = ({ label, link }) => {
  const url = link && link.story ? link.story.full_slug : link.url;

  return (
    <Link to={`/${url}`} className="theme-btn btn-style-one">
      <span>{label}</span>
    </Link>
  );
};

export default Button;
