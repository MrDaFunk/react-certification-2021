import React from 'react';
import { Router } from 'react-router-dom';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

import Video from './Video.component';
import VideoDetailsView from '../VideoDetailsView';

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

const videoInfo = {
  src: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
  title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
  description:
    "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
  videoID: 'DcFK1x3NHGY',
};

describe('Video Component Testing', () => {
  it('selects no element using an empty array', () => {
    const { src, title, description, videoID } = videoInfo;

    const { getByText } = customRender(
      <Video videoID={videoID} src={src} title={title} description={description} />,
      props
    );

    expect(getByText(title.replace('&#39;', "'"))).toBeInTheDocument();

    expect(getByText(decodeURIComponent(description))).toBeInTheDocument();
  });

  it('clicking an element and get the player-details component', () => {
    const { src, title, description, videoID } = videoInfo;

    customRender(
      <section>
        <Video videoID={videoID} src={src} title={title} description={description} />
        <VideoDetailsView />
      </section>,
      props
    );

    const node = document.querySelector('section div');

    fireEvent.click(node);

    waitFor(() => expect(screen.findByRole('player')).toBeInDocument(), {
      timeout: 200,
    });
  });
});
