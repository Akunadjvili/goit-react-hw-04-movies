import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.module.css';

import { getImagePath } from './../../api/apiService';

const AVATAR_FALLBACK = 'poster.jpg';

class MovieCard extends Component {
  static defaultProps = {
    overview: '(empty)',
    poster: null,
    score: '--',
    genres: [],
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.string,
    overview: PropTypes.string,
    poster: PropTypes.string || PropTypes.oneOf([null]),
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  };

  render() {
    const { poster, title, popularity, overview, genres } = this.props;

    return (
      <article className={styles.MovieCard}>
        <img
          className={styles.MovieCard__image}
          src={getImagePath(poster, AVATAR_FALLBACK)}
          alt={title}
          width="200px"
        />
        <div className={styles.MovieCard__data}>
          <section className={styles.MovieCard__section}>
            <h1 className={styles.MovieCard__title}>{title}</h1>
            <p>User Score: {popularity.toFixed(0)}%</p>
          </section>
          <section className={styles.MovieCard__section}>
            <h2 className={styles.MovieCard__title}>Overview</h2>
            <p>{overview}</p>
          </section>
          <section className={styles.MovieCard__section}>
            <h3 className={styles.MovieCard__title}>Genres</h3>
            <p>{genres.map(({ name }) => name).join(', ')}</p>
          </section>
        </div>
      </article>
    );
  }
}

export default MovieCard;
