import React, { Component } from 'react';

import styles from './HomePage.module.css';

import { getTrendMovies } from './../../api/apiService';

import MovieList from './../../components/MovieList';
import Loader from './../../components/Loader';

class HomePage extends Component {
  state = { movies: [], loading: false };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      this.setState({ movies: await getTrendMovies() });
    } catch (error) {
      throw error;
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <>
        <h1 className={styles.HomePage_title}>Trending today</h1>
        <MovieList movies={movies} />
        {loading && <Loader />}
      </>
    );
  }
}

export default HomePage;
