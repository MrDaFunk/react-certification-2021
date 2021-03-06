import React from 'react';

import { render } from '@testing-library/react';

import VideoDetailsView from './VideoDetailsView.component';

describe('VideoDetailsView Component Testing', () => {
  it('selects an element using the text content', () => {
    const { getByRole } = render(<VideoDetailsView />);

    expect(getByRole('player')).toBeInTheDocument();
  });
});
