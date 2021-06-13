import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Test.module.css';

class Test extends Component {
  static defaultProps = {};

  static propTypes = {
    test: PropTypes.string.isRequired,
  };
  render() {
    // const {} = this.state;
    // const {} = this.props;

    return <div className={styles.test}>{console.log('')}</div>;
  }
}

export default Test;

// const Test = props => {
//   return <div className={styles.test}>{console.log(props)}</div>;
// };
// Test.defaultProps = {};

// Test.propTypes = {
//   test: PropTypes.string.isRequired,
// };

// export default Test;
