import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './MovieDetailsPage.module.css';

import MovieCard from './../../components/MovieCard';
import Cast from './../../components/Cast';
import Reviews from './../../components/Reviews';
import MovieAdditionalLinks from './../../components/MovieAdditionalLinks';

import { searchMovieById } from './../../api/apiService';
import Loader from './../../components/Loader';
import routes from './../../routes';

class MovieDetailsPage extends Component {
  state = { movie: {}, loading: false };
  // static defaultProps = {};

  // static propTypes = {
  //   test: PropTypes.string.isRequired,
  // };

  loading = state => {
    this.setState({ loading: state });
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    try {
      this.loading(true);
      // this.setState({ loading: true });
      this.setState({ movie: await searchMovieById(movieId) });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading(false);
      // this.setState({ loading: false });
    }
  }

  historyBackHandle = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
  };

  render() {
    const {
      movie: { id, poster_path: poster, title, popularity, overview, genres },
      loading,
    } = this.state;

    if (!id) {
      return null; //first load empty
    }

    const url = this.props.match.url;

    return (
      <>
        {' '}
        <div className={styles.MovieDetailsPage}>
          <div className={styles.MovieDetailsPage__navigation}>
            <button
              className={styles.MovieDetailsPage__back}
              type="button"
              onClick={this.historyBackHandle}
            >
              &#8592; Go back
            </button>
          </div>
          <MovieCard
            poster={poster}
            title={title}
            popularity={popularity}
            overview={overview}
            genres={genres}
          />
          <MovieAdditionalLinks />
          <Switch>
            <Route
              path={`${url}${routes.cast}`}
              render={() => <Cast movieId={id} onLoading={this.loading} />}
            />
            <Route
              path={`${url}${routes.reviews}`}
              render={() => <Reviews movieId={id} onLoading={this.loading} />}
            />
          </Switch>
        </div>
        {loading && <Loader />}
      </>
    );
  }
}

export default MovieDetailsPage;
