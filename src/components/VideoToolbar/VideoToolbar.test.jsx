import React from 'react';
import { Router } from 'react-router-dom';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import Video from '../Video';

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
  isAuth: true,
};

// import App from '../App';

describe('VideoToolbar Component Testing', () => {
  it('not selects no element with the default params', () => {
    const { src, title, description, videoID, favorites } = {
      src: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
      title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
      description:
        "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
      videoID: 'DcFK1x3NHGY',
      favorites: true,
    };

    customRender(
      <Video
        videoID={videoID}
        src={src}
        title={title}
        description={description}
        favorites={favorites}
      />,
      props
    );

    expect(screen.queryByRole('favorite-icon')).not.toBeInTheDocument();
  });

  it('selects no element using an empty array', () => {
    const { src, title, description, videoID, favorites } = {
      src: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
      title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
      description:
        "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
      videoID: 'DcFK1x3NHGY',
      favorites: true,
    };

    customRender(
      <Video
        videoID={videoID}
        src={src}
        title={title}
        description={description}
        favorites={favorites}
      />,
      props
    );

    history.push('/favorites');

    waitFor(() => expect(screen.queryByRole('favorite-icon')).toBeInTheDocument(), 200);
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

    customRender(
      <Video
        videoID={videoID}
        src={src}
        title={title}
        description={description}
        favorites={favorites}
      />,
      props
    );

    history.push('/favorites');

    waitFor(() => {
      const node = document.querySelector('[role="favorite-icon"]');
      fireEvent.click(node);
    }, 200);
  });
});
