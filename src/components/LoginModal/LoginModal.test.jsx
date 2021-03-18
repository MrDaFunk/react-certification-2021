import React from 'react';

import { render } from '@testing-library/react';

import LoginModal from './LoginModal.component';

import { Store } from '../Store';

const customRender = (children, providerProps) =>
  render(<Store {...providerProps}>{children}</Store>);

const props = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: true,
  current: '',
  showLogInModal: true,
};

describe('LoginModal Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = customRender(<LoginModal />, props);

    expect(getByText('Iniciar Sesion')).toBeInTheDocument();
  });

  it('selects username and password fields using the text content and validating types and attributes', () => {
    const { getByPlaceholderText } = customRender(<LoginModal />, props);

    const user = getByPlaceholderText('Usuario');
    const password = getByPlaceholderText('Contraseña');

    expect(user.tagName).toBe('INPUT');
    expect(user).toHaveAttribute('type', 'text');
    expect(password.tagName).toBe('INPUT');
    expect(password).toHaveAttribute('type', 'password');
  });
});
