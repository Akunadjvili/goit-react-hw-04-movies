import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { isHandledError: false };

  componentDidCatch(error, info) {
    this.setState({ isHandledError: true, error });
  }
  render() {
    const { isHandledError, error } = this.state;
    const { children } = this.props;
    if (isHandledError) {
      return (
        <>
          <h1>Something went wrong:</h1>
          <p>{error}</p>
        </>
      );
    }
    return <>{children}</>;
  }
}
