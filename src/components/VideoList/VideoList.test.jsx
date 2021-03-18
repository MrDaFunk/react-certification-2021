import React from 'react';

import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';

import { items } from '../../assets/mock/videolist.mock.json';

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

describe('VideoList Component Testing', () => {
  it('selects no element using an empty array', () => {
    const { getByText } = customRender(<VideoList />, props);

    expect(getByText('No se encontraron resultados')).toBeInTheDocument();
  });

  it('selects elements using a mock array', () => {
    props.videos = items;
    customRender(<VideoList />, props);

    expect(screen.queryByText('No se encontraron resultados')).not.toBeInTheDocument();
  });
});
