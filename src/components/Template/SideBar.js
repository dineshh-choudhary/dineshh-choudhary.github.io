import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Dinesh Choudhary" />
      </Link>
      <header>
        <h2>Dinesh Choudhary</h2>
        <p className="role-tag">Senior Software Engineer @ Coupang</p>
        <p className="email-link">
          <a href="mailto:dineshchoudhary9997@gmail.com">dineshchoudhary9997@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I'm Dinesh! I have <strong>8+ years of engineering experience</strong> architecting high-scale
        distributed systems, transportation optimization algorithms, and production Generative AI / Agentic platforms.
        Currently building next-generation logistics systems at <a href="https://www.coupang.com" target="_blank" rel="noreferrer">Coupang</a>,
        previously at <a href="https://salesforce.com" target="_blank" rel="noreferrer">Salesforce</a> and <a href="https://flipkart.com" target="_blank" rel="noreferrer">Flipkart</a>.
        Proud graduate of <a href="https://nitkkr.ac.in/" target="_blank" rel="noreferrer">NIT Kurukshetra</a>.
      </p>
      <ul className="actions vertical">
        <li>
          <a
            href={`${PUBLIC_URL}/Dinesh_Choudhary_Resume.pdf`}
            download="Dinesh_Choudhary_Resume.pdf"
            className="button primary fit"
          >
            Download Resume (PDF)
          </a>
        </li>
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button fit">Explore Experience</Link>
          ) : (
            <Link to="/about" className="button fit">About Me</Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; {new Date().getFullYear()} Dinesh Choudhary.
      </p>
    </section>
  </section>
);

export default SideBar;
