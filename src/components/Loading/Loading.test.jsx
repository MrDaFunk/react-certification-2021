import React from 'react';

import { render } from '@testing-library/react';

import Loading from './Loading.component';

describe('Loading Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByRole } = render(<Loading />);

    expect(getByRole('loading')).toBeInTheDocument();
  });
});
