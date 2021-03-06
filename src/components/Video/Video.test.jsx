import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Video from './Video.component';

import App from '../App';

describe('Video Component Testing', () => {
  it('selects no element using an empty array', () => {
    const { src, title, description, videoID } = {
      src: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
      title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
      description:
        "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
      videoID: 'DcFK1x3NHGY',
    };

    const { getByText } = render(
      <Video videoID={videoID} src={src} title={title} description={description} />
    );

    expect(getByText(title.replace('&#39;', "'"))).toBeInTheDocument();

    expect(getByText(decodeURIComponent(description))).toBeInTheDocument();
  });

  it('clicking an element and get the player-details component', () => {
    render(<App />);

    const node = document.querySelector('main section div');

    fireEvent.click(node);

    waitFor(() => expect(screen.findByRole('player')).toBeInDocument(), {
      timeout: 200,
    });
  });
});
