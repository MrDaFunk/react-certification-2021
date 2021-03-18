import React from 'react';

import { render } from '@testing-library/react';

import VideoDetailsView from './VideoDetailsView.component';

import { Store } from '../Store';

const customRender = (children, providerProps) =>
  render(<Store {...providerProps}>{children}</Store>);

const props = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: true,
  current: 'abc',
  showLogInModal: false,
};

describe('VideoDetailsView Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByRole } = customRender(<VideoDetailsView />, props);

    expect(getByRole('player')).toBeInTheDocument();
  });

  it('selects an element using the text content', () => {
    const { getByText } = customRender(<VideoDetailsView />, props);

    expect(getByText('Videos Sugeridos')).toBeInTheDocument();
  });
});
