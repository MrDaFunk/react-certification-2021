import React from 'react';

import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';

import { items } from '../../assets/mock/videolist.mock.json';

describe('VideoList Component Testing', () => {
  it('selects no element using an empty array', () => {
    const list = [];
    const { getByText } = render(<VideoList data={list} />);

    expect(getByText('No se encontraron resultados')).toBeInTheDocument();
  });

  it('selects elements using a mock array', () => {
    render(<VideoList data={items} />);

    expect(screen.queryByText('No se encontraron resultados')).not.toBeInTheDocument();
  });
});
