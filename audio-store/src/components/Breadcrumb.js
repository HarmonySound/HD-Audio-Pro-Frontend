// src/components/Breadcrumb.js

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="breadcrumb">
      <h2>
        <Link to="/">Home</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span key={name}> / {name}</span>
          ) : (
            <span key={name}>
              {' '}
              / <Link to={routeTo}>{decodeURIComponent(name)}</Link>
            </span>
          );
        })}
      </h2>
    </nav>
  );
};

export default Breadcrumb;
