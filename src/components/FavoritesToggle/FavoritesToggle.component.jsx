import React from 'react';

import { Container, FavoriteIcon } from './FavoritesToggle.styled';

import { getFavoriteList } from '../../utils/services';

import { useDispatch } from '../Store';

const FavoritesToggle = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const favoritesHandler = async (event) => {
    dispatch({ type: 'toggleIsLoading', payload: true });
    const response = await getFavoriteList();
    if (response) {
      const { items } = await response.json();
      dispatch({ type: 'setVideos', payload: items });
    }
    dispatch({ type: 'toggleIsLoading', payload: false });
  };

  return (
    <Container onClick={favoritesHandler}>
      <FavoriteIcon />
      Favorites
    </Container>
  );
};

export default FavoritesToggle;
