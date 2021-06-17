import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './MovieAdditionalLinks.module.css';

import routes from './../../routes';

class MovieAdditionalLinks extends Component {
  render() {
    const {
      match: { url },
      location,
    } = this.props;
    // console.log(this.props);
    return (
      <div className={styles.MovieAdditionalLinks}>
        <h4 className={styles.MovieAdditionalLinks__title}>
          Additional information
        </h4>
        <ul className={styles.MovieAdditionalLinks__list}>
          <li className={styles.MovieAdditionalLinks__item}>
            <NavLink
              exact
              to={{
                pathname: `${url}${routes.cast}`,
                state: { from: location },
              }}
              activeClassName={styles['MovieAdditionalLinks__item--active']}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.MovieAdditionalLinks__item}>
            <NavLink
              exact
              to={{
                pathname: `${url}${routes.reviews}`,
                state: { from: location },
              }}
              activeClassName={styles['MovieAdditionalLinks__item--active']}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MovieAdditionalLinks);
