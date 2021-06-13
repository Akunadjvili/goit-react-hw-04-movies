import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

import routes from './../../routes';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.Navigation}>
          <li className={styles.Navigation__item}>
            <NavLink
              exact
              to={{ pathname: routes.home }}
              activeClassName={styles['Navigation__item--active']}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.Navigation__item}>
            <NavLink
              to={{ pathname: routes.movies, search: '' }}
              activeClassName={styles['Navigation__item--active']}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
