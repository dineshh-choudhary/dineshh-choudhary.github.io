import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

const { PUBLIC_URL } = process.env;

// Sections displayed in professional order for an 8+ YOE Senior Engineer
const sections = {
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Education: () => <Education data={degrees} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Dinesh Choudhary's Resume. Senior Software Engineer at Coupang, ex-Salesforce, ex-Flipkart."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
        <div className="resume-download-action">
          <a
            href={`${PUBLIC_URL}/Dinesh_Choudhary_Resume.pdf`}
            download="Dinesh_Choudhary_Resume.pdf"
            className="button primary"
          >
            Download PDF
          </a>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
