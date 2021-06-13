import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

class Main extends Component {
  static defaultProps = {};

  static propTypes = {
    childrens: PropTypes.arrayOf(PropTypes.node),
  };
  render() {
    const { children } = this.props;

    return <main className={styles.Main}>{children}</main>;
  }
}

export default Main;
