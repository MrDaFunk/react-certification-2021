import React from 'react';

import { render } from '@testing-library/react';

import LoginToggle from './LoginToggle.component';

describe('LoginToggle Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = render(<LoginToggle />);

    expect(getByText('Iniciar Sesion').tagName).toBe('A');
  });
});
