import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import {
  Container,
  Card,
  Title,
  Body,
  Block,
  UserIcon,
  KeyIcon,
  SubmitButton,
  Error,
} from './LoginView.styled';

import { stopPropagation } from '../../utils/fns';
import { login } from '../../utils/services';
import { Input } from '../../utils/styled/elements';
import { storage } from '../../utils/storage';

import { useState as useStoreState, useDispatch } from '../State';

const LoginView = () => {
  const history = useHistory();
  const { showLogInModal } = useStoreState();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line no-unused-vars
  const closeVideoHandler = (event) => {
    history.goBack();
    dispatch({ type: 'toggleShowLogInModal' });
  };

  const changeUsername = ({ target: { value } }) => {
    setErrorMessage('');
    setUsername(value);
  };

  const changePassword = ({ target: { value } }) => {
    setErrorMessage('');
    setPassword(value);
  };

  const loginUser = async () => {
    if (username === '' || password === '') {
      setErrorMessage('Campos vacios!');
      return;
    }

    dispatch({ type: 'toggleIsLoading', payload: true });
    const response = await login({ username, password });
    if (response) {
      const { success, message = '' } = await response.json();
      if (success) {
        storage.set('token', 'FAKE_TOKEN');
        dispatch({ type: 'setAuth', payload: true });
        history.goBack();
      } else {
        setErrorMessage(message);
      }
      dispatch({ type: 'toggleIsLoading', payload: false });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser();
  };

  if (!showLogInModal) {
    return <Redirect to="/" />;
  }

  return (
    <Container onClick={closeVideoHandler}>
      <Card
        // eslint-disable-next-line jsx-a11y/aria-role
        role="login-modal"
        onClick={stopPropagation}
      >
        <Title>Iniciar Sesion</Title>
        <Body noValidate onSubmit={handleSubmit}>
          <Block>
            <UserIcon />
            <Input type="text" placeholder="Usuario" onChange={changeUsername} />
          </Block>
          <Block>
            <KeyIcon />
            <Input type="password" placeholder="Contraseña" onChange={changePassword} />
          </Block>
          <SubmitButton type="submit">Aceptar</SubmitButton>
        </Body>
        {errorMessage !== '' && <Error>{errorMessage}</Error>}
      </Card>
    </Container>
  );
};

export default LoginView;
