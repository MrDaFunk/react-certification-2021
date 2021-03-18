import React from 'react';

import {
  Container,
  Card,
  Title,
  Body,
  Block,
  UserIcon,
  KeyIcon,
  SubmitButton,
} from './LoginModal.styled';

import { stopPropagation } from '../../utils/fns';
import { Input } from '../../utils/styled/elements';

import { useState, useDispatch } from '../Store';

const LoginModal = () => {
  const { showLogInModal } = useState();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const closeVideoHandler = (event) => dispatch({ type: 'toggleShowLogInModal' });

  if (!showLogInModal) {
    return null;
  }

  return (
    <Container onClick={closeVideoHandler}>
      {/* eslint-disable-next-line jsx-a11y/aria-role */}
      <Card role="login-modal" onClick={stopPropagation}>
        <Title>Iniciar Sesion</Title>
        <Body>
          <Block>
            <UserIcon />
            <Input type="text" placeholder="Usuario" />
          </Block>
          <Block>
            <KeyIcon />
            <Input type="password" placeholder="Contraseña" />
          </Block>
          <SubmitButton type="button">Aceptar</SubmitButton>
        </Body>
      </Card>
    </Container>
  );
};

export default LoginModal;
