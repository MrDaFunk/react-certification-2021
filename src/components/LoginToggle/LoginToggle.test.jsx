import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import LoginToggle from './LoginToggle.component';
import App from '../App';

describe('LoginToggle Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = render(<LoginToggle />);

    expect(getByText('Iniciar Sesion')).toBeInTheDocument();
  });

  it('validate the click handler on the element and show the modal', () => {
    const { getByText } = render(<App />);

    const node = getByText('Iniciar Sesion');

    fireEvent.click(node);

    waitFor(() => expect(screen.findByRole('login-modal')).toBeInDocument(), {
      timeout: 200,
    });
  });
});
