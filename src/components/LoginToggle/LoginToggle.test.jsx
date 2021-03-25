import React from 'react';
import { Router } from 'react-router-dom';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import LoginToggle from './LoginToggle.component';
import LoginView from '../LoginView';

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
  isAuth: false,
};

describe('LoginToggle Component Testing', () => {
  it('not selects an element with the default state values', () => {
    customRender(<LoginToggle />, props);

    expect(screen.queryByText('Iniciar Sesion')).toBeInTheDocument();
  });

  it('selects an element using the text content', () => {
    customRender(<LoginToggle />, { ...props, isAuth: true });

    waitFor(
      () => expect(screen.queryByText('Iniciar Sesion')).not.toBeInTheDocument(),
      200
    );
  });

  it('validate the click handler on the element and show the modal', () => {
    customRender(
      <>
        <LoginToggle />
        <LoginView />
      </>,
      props
    );

    const node = screen.queryByText('Iniciar Sesion');

    fireEvent.click(node);

    waitFor(() => expect(screen.findByRole('login-modal')).toBeInDocument(), {
      timeout: 200,
    });
  });
});
