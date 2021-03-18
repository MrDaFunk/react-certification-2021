import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import LoginToggle from './LoginToggle.component';
import LoginModal from '../LoginModal';

import { Store } from '../Store';

const customRender = (children, providerProps) =>
  render(<Store {...providerProps}>{children}</Store>);

const props = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: true,
  current: '',
  showLogInModal: false,
};

describe('LoginToggle Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = customRender(<LoginToggle />, props);

    expect(getByText('Iniciar Sesion')).toBeInTheDocument();
  });

  it('validate the click handler on the element and show the modal', () => {
    const { getByText } = customRender(
      <>
        <LoginToggle />
        <LoginModal />
      </>,
      props
    );

    const node = getByText('Iniciar Sesion');

    fireEvent.click(node);

    waitFor(() => expect(screen.findByRole('login-modal')).toBeInDocument(), {
      timeout: 200,
    });
  });
});
