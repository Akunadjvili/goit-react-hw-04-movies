import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Reviews.module.css';

import { searchMovieReviewsById } from './../../api/apiService';

class Reviews extends Component {
  state = { reviews: [] };

  static defaultProps = { onLoading: () => {} };

  static propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    onLoading: PropTypes.func,
  };

  scrollTo = ref => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  async componentDidMount() {
    const { movieId, onLoading } = this.props;
    try {
      onLoading(true);
      this.setState({ reviews: await searchMovieReviewsById(movieId) });
    } catch (error) {
      console.log(error);
    } finally {
      onLoading(false);
    }
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul className={styles.Reviews} ref={this.scrollTo}>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => {
              return (
                <li className={styles.Reviews__item} key={id}>
                  <h3 className={styles.Reviews__author}>{author}</h3>
                  <p className={styles.Reviews__message}>{content}</p>
                </li>
              );
            })
          ) : (
            <li className={styles.Reviews__item}>
              We don't have any reviews for this movie
            </li>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
