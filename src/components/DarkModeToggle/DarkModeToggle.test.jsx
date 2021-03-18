import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DarkModeToggle from './DarkModeToggle.component';

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

describe('DarkModeToggle Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = customRender(<DarkModeToggle />, props);

    expect(getByText('Dark Mode')).toBeInTheDocument();
  });

  it('validate the click handler on the element', () => {
    const { getByText } = customRender(<DarkModeToggle />, props);

    const node = getByText('Dark Mode');

    fireEvent.click(node);
  });
});
