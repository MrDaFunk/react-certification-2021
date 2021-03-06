import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DarkModeToggle from './DarkModeToggle.component';

describe('DarkModeToggle Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = render(<DarkModeToggle />);

    expect(getByText('Dark Mode')).toBeInTheDocument();
  });

  it('validate the click handler on the element', (done) => {
    const handleClick = () => {
      done();
    };

    const { getByText } = render(<DarkModeToggle toggleDarkMode={handleClick} />);

    const node = getByText('Dark Mode');

    fireEvent.click(node);
  });
});
