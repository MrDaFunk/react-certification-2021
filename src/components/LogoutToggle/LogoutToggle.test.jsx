import React from 'react';
import { Router } from 'react-router-dom';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import LogoutToggle from './LogoutToggle.component';

import State from '../State';

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

describe('LogoutToggle Component Testing', () => {
  it('not selects an element with the default state values', () => {
    customRender(<LogoutToggle />, props);

    expect(screen.queryByText('Cerrar Sesion')).not.toBeInTheDocument();
  });

  it('selects an element using the text content', () => {
    customRender(<LogoutToggle />, { ...props, hasAuth: true });

    expect(screen.queryByText('Cerrar Sesion')).toBeInTheDocument();
  });

  it('validate the click handler on the element', () => {
    customRender(<LogoutToggle />, { ...props, hasAuth: true });

    const node = screen.queryByText('Cerrar Sesion');

    fireEvent.click(node);

    waitFor(
      () => expect(screen.queryByText('Cerrar Sesion')).not.toBeInTheDocument(),
      200
    );
  });
});
