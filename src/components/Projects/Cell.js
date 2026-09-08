import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post project-card">
      <header>
        <div className="project-header-info">
          <h3>{data.link ? <a href={data.link} target="_blank" rel="noreferrer">{data.title}</a> : data.title}</h3>
          {data.subtitle && <p className="project-subtitle">{data.subtitle}</p>}
        </div>
        <time className="published">{dayjs(data.date).format('MMM YYYY')}</time>
      </header>
      {data.image && (
        <div className="image project-image-container">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </div>
      )}
      <div className="description">
        <p>{data.desc}</p>
      </div>
      {data.tags && data.tags.length > 0 && (
        <div className="project-tech-tags">
          {data.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      )}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Cell;
