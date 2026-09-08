import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

const { PUBLIC_URL } = process.env;

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const location = useLocation();

  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>
            <span className="brand-dot" />
            {l.label}
          </Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li
              key={l.label}
              className={location.pathname === l.path ? 'active-nav-item' : ''}
            >
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-actions">
        <a
          href={`${PUBLIC_URL}/Dinesh_Choudhary_Resume.pdf`}
          download="Dinesh_Choudhary_Resume.pdf"
          className="header-resume-btn"
        >
          Resume PDF
        </a>
      </div>
      <Hamburger />
    </header>
  );
};

export default Navigation;
