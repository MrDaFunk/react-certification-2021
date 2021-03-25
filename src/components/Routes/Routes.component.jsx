import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import Error404Page from '../../pages/Error404';

import LoginView from '../LoginView';
import VideoDetailsView from '../VideoDetailsView';

import { useState } from '../State';

const PrivateRoute = ({ component, ...rest }) => {
  const Component = component;
  const { hasAuth } = useState();

  return (
    <Route
      {...rest}
      render={(props) =>
        hasAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
        )
      }
    />
  );
};

const PlayingRoute = ({ component, ...rest }) => {
  const Component = component;
  const { current } = useState();

  return (
    <Route
      {...rest}
      render={(props) =>
        current !== '' ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
};

const Routes = () => {
  const { current, showLogInModal } = useState();
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/login" component={LoginView} />
        <Route exact path="/" component={HomePage} />
        <PlayingRoute path="/video" component={VideoDetailsView} />
        <PrivateRoute path="/favorites" component={FavoritesPage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
      {background && showLogInModal && <Route path="/login" component={LoginView} />}
      {background && current !== '' && (
        <PlayingRoute path="/video" component={VideoDetailsView} />
      )}
    </>
  );
};

export default Routes;
