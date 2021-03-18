import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import FavoritesToggle from './FavoritesToggle.component';
import { Store } from '../Store';
import Loading from '../Loading';

const customRender = (children, providerProps) =>
  render(<Store {...providerProps}>{children}</Store>);

const props = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: true,
  current: '',
  showLogInModal: false,
};

describe('FavoritesToggle Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByText } = customRender(<FavoritesToggle />, props);

    expect(getByText('Favorites')).toBeInTheDocument();
  });

  it('validate the click handler on the element', () => {
    const { getByText } = customRender(
      <>
        <Loading />
        <FavoritesToggle />
      </>,
      props
    );

    const node = getByText('Favorites');

    fireEvent.click(node);

    waitFor(
      () =>
        expect(expect(screen.findByRole('loading')).toBeInDocument()).toBeInDocument(),
      { timeout: 200 }
    );
  });
});
