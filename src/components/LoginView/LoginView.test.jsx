import React from 'react';
import { Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import LoginView from './LoginView.component';

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

describe('LoginModal Component Testing', () => {
  it('not selects an element with the default state values', () => {
    customRender(<LoginView />, props);

    expect(screen.queryByRole('login-modal')).not.toBeInTheDocument();
  });

  it('selects an element using the text content', () => {
    customRender(<LoginView />, { ...props, showLogInModal: true });

    expect(screen.queryByRole('login-modal')).toBeInTheDocument();
  });

  it('selects username and password fields using the text content and validating types and attributes', () => {
    customRender(<LoginView />, { ...props, showLogInModal: true });

    const user = screen.queryByPlaceholderText('Usuario');
    const password = screen.queryByPlaceholderText('Contraseña');

    expect(user.tagName).toBe('INPUT');
    expect(user).toHaveAttribute('type', 'text');
    expect(password.tagName).toBe('INPUT');
    expect(password).toHaveAttribute('type', 'password');
  });
});
