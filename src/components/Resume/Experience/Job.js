import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, location, summary, highlights, technologies,
  },
}) => {
  const isCurrent = !endDate;
  return (
    <article className={`jobs-container ${isCurrent ? 'current-job' : ''}`}>
      <header>
        <div className="job-title-row">
          <h4>
            <a href={url} target="_blank" rel="noreferrer" className="company-name">{name}</a>
            <span className="role-separator">—</span>
            <span className="job-position">{position}</span>
          </h4>
          {isCurrent && <span className="status-pill active">Present</span>}
        </div>
        <div className="job-meta">
          <span className="daterange">
            {dayjs(startDate).format('MMM YYYY')} – {endDate ? dayjs(endDate).format('MMM YYYY') : 'Present'}
          </span>
          {location && (
            <>
              <span className="meta-separator">•</span>
              <span className="job-location">{location}</span>
            </>
          )}
        </div>
      </header>
      {summary ? (
        <Markdown
          options={{
            overrides: {
              p: {
                props: {
                  className: 'summary',
                },
              },
            },
          }}
        >
          {summary}
        </Markdown>
      ) : null}
      {highlights ? (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      {technologies && technologies.length > 0 && (
        <div className="job-tech-stack">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    location: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Job;
