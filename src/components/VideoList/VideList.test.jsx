import React from 'react';

import { render } from '@testing-library/react';

import VideoList from './VideoList.component';

describe('VideoList Testing', () => {
  it('selects no element using an empty array', () => {
    const list = [];
    const { getByText } = render(<VideoList data={list} />);

    expect(getByText('No se encontraron resultados').tagName).toBe('P');
  });
});
