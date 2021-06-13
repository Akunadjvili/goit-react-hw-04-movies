import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

class Container extends Component {
  static defaultProps = {};

  static propTypes = {
    childrens: PropTypes.arrayOf(PropTypes.node),
  };
  render() {
    const { children } = this.props;

    return <div className={styles.Container}>{children}</div>;
  }
}

export default Container;
