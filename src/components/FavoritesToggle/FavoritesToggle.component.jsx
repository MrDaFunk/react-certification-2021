import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, FavoriteIcon } from './FavoritesToggle.styled';

import { useState } from '../State';

const FavoritesToggle = () => {
  const history = useHistory();
  const { hasAuth } = useState();

  if (!hasAuth) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <Container role="favorite-toggle" onClick={() => history.push('/favorites')}>
      <FavoriteIcon />
      Favorites
    </Container>
  );
};

export default FavoritesToggle;
