import React from 'react';
import { Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import VideoList from './VideoList.component';

import { items } from '../../assets/mock/videolist.mock.json';

import State from '../State';

const history = createMemoryHistory();

const customRender = (children, providerProps) =>
  render(
    <Router history={history}>
      <State {...providerProps}>{children}</State>
    </Router>
  );

const props = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: true,
  current: '',
  showLogInModal: false,
  isAuth: false,
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
