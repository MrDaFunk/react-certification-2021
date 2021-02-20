import React from 'react';

import { render } from '@testing-library/react';

import Search from './Search.component';

describe('Searchbar Testing', () => {
  it('selects an element using the placeholder', () => {
    const { getByPlaceholderText } = render(<Search />);

    expect(getByPlaceholderText('Buscar').tagName).toBe('INPUT');
  });
});
