import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description="Dinesh Choudhary - Senior Software Engineer at Coupang, ex-Salesforce, ex-Flipkart. 8+ YOE in Distributed Systems, Logistics Optimization, and GenAI."
  >
    <article className="post hero-post" id="index">
      <header className="hero-header">
        <div className="title">
          <div className="hero-status-pill">
            <span className="pulse-dot" /> Senior Software Engineer @ Coupang
          </div>
          <h2><Link to="/">Dinesh Choudhary</Link></h2>
          <p className="hero-tagline">
            Building large-scale distributed architectures, transportation routing engines,
            and production Generative AI / Agentic systems.
          </p>
        </div>
      </header>

      {/* Metrics Banner */}
      <div className="hero-stats-grid">
        <div className="stat-card">
          <span className="stat-value">8+</span>
          <span className="stat-label">Years of Experience</span>
          <span className="stat-sub">Coupang • Salesforce • Flipkart</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">10K+</span>
          <span className="stat-label">Executions / Month</span>
          <span className="stat-sub">LLM-Powered OnCall Engine (MCP)</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">30K+</span>
          <span className="stat-label">Orders Handled</span>
          <span className="stat-sub">Alice VRP Routing Optimization</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">NIT</span>
          <span className="stat-label">Kurukshetra</span>
          <span className="stat-sub">B.Tech in Computer Science</span>
        </div>
      </div>

      {/* Key Focus Highlights */}
      <div className="focus-areas-section">
        <h3>Core Engineering Domains</h3>
        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-icon">⚡</div>
            <h4>Generative & Agentic AI</h4>
            <p>
              Designing production LLM engines with Model Context Protocol (MCP), tool-calling,
              and self-updating RAG knowledge bases to automate critical operational workflows.
            </p>
          </div>
          <div className="focus-card">
            <div className="focus-icon">🚛</div>
            <h4>Logistics & Routing Optimization</h4>
            <p>
              Architecting greenfield VRP routing platforms (Alice) supporting heterogeneous fleets,
              time windows, and milkrun transportation pipelines at massive scale.
            </p>
          </div>
          <div className="focus-card">
            <div className="focus-icon">🛡️</div>
            <h4>Resilient Distributed Systems</h4>
            <p>
              Engineering fault-tolerant streaming systems with Kafka, multi-AZ disaster recovery
              architectures scaling 2x volume, and cost-effective AWS observability.
            </p>
          </div>
          <div className="focus-card">
            <div className="focus-icon">📈</div>
            <h4>Algorithmic Trading</h4>
            <p>
              Building multi-strategy execution platforms for NSE options & equity, pairing quantitative
              market signals with real-time LLM-driven sentiment intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="hero-cta-section">
        <h3>Explore Portfolio</h3>
        <p>
          Welcome to my personal site! Learn more <Link to="/about">about my journey</Link>,
          explore my detailed career <Link to="/resume">experience & skills</Link>,
          check out my <Link to="/projects">projects</Link>, view <Link to="/stats">site stats</Link>,
          or <Link to="/contact">reach out directly</Link>.
        </p>
        <div className="hero-buttons">
          <Link to="/resume" className="button primary">View Resume & Experience</Link>
          <a
            href={`${PUBLIC_URL}/Dinesh_Choudhary_Resume.pdf`}
            download="Dinesh_Choudhary_Resume.pdf"
            className="button"
          >
            Download PDF
          </a>
          <Link to="/projects" className="button">Browse Projects</Link>
          <Link to="/contact" className="button">Contact Me</Link>
        </div>
      </div>
    </article>
  </Main>
);

export default Index;
