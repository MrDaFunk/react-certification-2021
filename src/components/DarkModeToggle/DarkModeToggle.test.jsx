import React from 'react';

import { render } from '@testing-library/react';

import DarkModeToggle from './DarkModeToggle.component';

describe('DarkMode Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = render(<DarkModeToggle />);

    expect(getByText('Dark Mode').tagName).toBe('DIV');
  });
});
