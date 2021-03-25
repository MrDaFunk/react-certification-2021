import React from 'react';
import { Router } from 'react-router-dom';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import FavoritesToggle from './FavoritesToggle.component';
import LogoutToggle from '../LogoutToggle';
import State from '../State';
import Loading from '../Loading';

const history = createMemoryHistory();

const customRender = (children, providerProps) =>
  render(
    <Router history={history}>
      <State {...providerProps}>{children}</State>
    </Router>
  );

const props = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: true,
  current: '',
  showLogInModal: false,
  hasAuth: false,
};

describe('FavoritesToggle Component Testing', () => {
  it('not selects an element with the default state values', () => {
    customRender(<FavoritesToggle />, props);

    expect(screen.queryByRole('favorite-toggle')).not.toBeInTheDocument();
  });

  it('selects an element using the text content', () => {
    customRender(<FavoritesToggle />, { ...props, hasAuth: true });

    waitFor(() => expect(screen.queryByRole('favorite-toggle')).toBeInTheDocument(), 200);
  });

  it('validate the click handler on the element', () => {
    customRender(
      <>
        <Loading />
        <FavoritesToggle />
      </>,
      { ...props, hasAuth: true }
    );

    waitFor(() => {
      const node = screen.queryByRole('favorite-toggle');

      fireEvent.click(node);

      waitFor(() => expect(screen.findByRole('loading')).toBeInDocument(), 200);
    }, 200);
  });

  it('validate the click handler on the element to check signed out', () => {
    customRender(
      <>
        <Loading />
        <FavoritesToggle />
        <LogoutToggle />
      </>,
      { ...props, hasAuth: true }
    );

    const node = screen.queryByText('Cerrar Sesion');

    fireEvent.click(node);

    waitFor(
      () => expect(screen.queryByRole('favorite-toggle')).not.toBeInTheDocument(),
      200
    );
  });
});
