import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';
import { searchMovieCreditsById, getImagePath } from './../../api/apiService';

class Cast extends Component {
  state = { casts: [] };
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
      this.setState({ casts: await searchMovieCreditsById(movieId) });
    } catch (error) {
      console.log(error);
    } finally {
      onLoading(false);
    }
  }
  render() {
    const { casts } = this.state;

    return (
      casts.length > 0 && (
        <>
          <ul className={styles.Cast} ref={this.scrollTo}>
            {casts.map(({ credit_id, name, profile_path }) => {
              profile_path = getImagePath(profile_path);

              return (
                <li className={styles.Cast__item} key={credit_id}>
                  <h3 className={styles.Cast__title}>{name}</h3>
                  <img
                    className={styles.Cast_image}
                    src={profile_path}
                    width="100px"
                    alt={name}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )
    );
  }
}

export default Cast;
// export default withRouter(Cast);
