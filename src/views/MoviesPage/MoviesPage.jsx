import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

// import PropTypes from 'prop-types';
import queryString from 'query-string';
import styles from './MoviesPage.module.css';

import Loader from './../../components/Loader';
import Searchbar from './../../components/Searchbar';
import MovieList from './../../components/MovieList';
import { searchMovies } from './../../api/apiService';

class MoviesPage extends PureComponent {
  state = { movies: [], search: '', loading: false };
  loadSearch = '';
  getSearchFromProps = props => queryString.parse(props.location.search).search;

  constructor(props) {
    super(props);
    const search = queryString.parse(props.location.search).search || '';
    this.loadSearch = search;
  }

  async componentDidUpdate(prevProps, { search }) {
    const prevSearch = this.getSearchFromProps(prevProps);
    const nextSearch = this.getSearchFromProps(this.props);

    if (prevSearch !== nextSearch) {
      await this.fetchMoviesList(nextSearch || '');
    } else if (search !== this.state.search) {
      await this.fetchMoviesList(this.state.search || ' ');
    }
  }

  componentDidMount() {
    const search = queryString.parse(this.props.location.search).search || '';
    this.setState({ search });
  }

  fetchMoviesList = async search => {
    if (search.trim() === '') {
      return this.setState({ search: '', movies: [] });
    }
    try {
      this.setState({ loading: true });
      this.setState({ search, movies: await searchMovies(search) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onQueryChange = search => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `search=${search}`,
    });
    this.setState({ search });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        <div className={styles.MoviesPage}>
          <Searchbar onSubmit={this.onQueryChange} init={this.loadSearch} />
          {movies.length ? <MovieList movies={movies} /> : null}
        </div>
        {loading && <Loader />}
      </>
    );
  }
}

export default withRouter(MoviesPage);
