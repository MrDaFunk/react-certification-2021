import React from 'react';

import { Container, ToggleOffIcon, ToggleOnIcon } from './DarkModeToggle.styled';

import { useState, useDispatch } from '../State';

const DarkModeToggle = () => {
  const { isDarkmodeOn } = useState();
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch({ type: 'toggleIsDarkmodeOn' })}>
      {isDarkmodeOn ? <ToggleOnIcon /> : <ToggleOffIcon />}
      Dark Mode
    </Container>
  );
};

export default DarkModeToggle;
