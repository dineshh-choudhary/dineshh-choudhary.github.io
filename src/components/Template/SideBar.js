import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dinesh Choudhary</h2>
        <p><a href="mailto:dineshchoudhary9997@gmail.com">dineshchoudhary9997@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I'm Dinesh Choudhary, a proud graduate of <a href="https://nitkkr.ac.in/">NIT KURUKSHETRA.</a> My journey in the tech industry has been an exciting one, 
        with experiences ranging from being a Software Development Engineer at <a href="https://Flipkart.com">Flipkart </a> 
         to my current role as a Member of Technical Staff at <a href="https://salesforce.com">Salesforce</a>. 
        I'm passionate about technology and dedicated to creating innovative solutions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dinesh Choudhary<Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
