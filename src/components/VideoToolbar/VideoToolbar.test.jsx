import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Video from '../Video';

// import App from '../App';

describe('VideoToolbar Component Testing', () => {
  it('selects no element using an empty array', () => {
    const { src, title, description, videoID, favorites } = {
      src: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
      title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
      description:
        "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
      videoID: 'DcFK1x3NHGY',
      favorites: true,
    };

    const { getByRole } = render(
      <Video
        videoID={videoID}
        src={src}
        title={title}
        description={description}
        favorites={favorites}
      />
    );

    expect(getByRole('favorite-icon')).toBeInTheDocument();
  });

  it('clicking an element and get the player-details component', () => {
    const { src, title, description, videoID, favorites } = {
      src: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
      title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
      description:
        "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
      videoID: 'DcFK1x3NHGY',
      favorites: true,
    };

    render(
      <Video
        videoID={videoID}
        src={src}
        title={title}
        description={description}
        favorites={favorites}
      />
    );

    const node = document.querySelector('[role="favorite-icon"]');
    fireEvent.click(node);
  });
});
