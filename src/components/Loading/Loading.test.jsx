import React from 'react';

import { render } from '@testing-library/react';

import Loading from './Loading.component';

import State from '../State';

const customRender = (children, providerProps) =>
  render(<State {...providerProps}>{children}</State>);

const props = {
  isLoading: true,
  videos: [],
  isDarkmodeOn: true,
  current: '',
  showLogInModal: false,
};

describe('Loading Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByRole } = customRender(<Loading />, props);

    expect(getByRole('loading')).toBeInTheDocument();
  });
});
