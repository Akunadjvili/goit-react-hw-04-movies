import { React, lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Container from './components/Container';

import Navigation from './components/Navigation';
import ErrorBoundary from './wrappers/ErrorBoundary';
import Loader from './components/Loader';

import routes from './routes';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header>
          <Container>
            <Navigation />
          </Container>
        </Header>
        <Main>
          <Container>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route
                  path={routes.movieDetails}
                  component={MovieDetailsPage}
                />
                <Route path={routes.movies} component={MoviesPage} />
                {/* <Route component={HomePage} /> */}
                <Route
                  render={() => <Redirect to={{ pathname: routes.home }} />}
                />
              </Switch>
            </Suspense>
          </Container>
        </Main>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
export default App;
