import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

class Header extends Component {
  static defaultProps = {};

  static propTypes = {
    childrens: PropTypes.arrayOf(PropTypes.node),
  };
  render() {
    const { children } = this.props;

    return <header className={styles.Header}>{children}</header>;
  }
}

export default Header;
