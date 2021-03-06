import React from 'react';
import { Container } from './Loading.styled';

import { Spinner } from '../../utils/styled/icons';

const Loading = () => (
  <Container>
    {/* eslint-disable-next-line jsx-a11y/aria-role */}
    <Spinner size={42} role="loading" />
  </Container>
);

export default Loading;
