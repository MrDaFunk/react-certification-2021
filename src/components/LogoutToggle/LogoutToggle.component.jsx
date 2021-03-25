import React from 'react';
import { useHistory } from 'react-router-dom';

import { Text } from './LogoutToggle.styled';

import { logout } from '../../utils/services';
import { A } from '../../utils/styled/elements';

import { useState, useDispatch } from '../State';
import { storage } from '../../utils/storage';

const LogoutToggle = () => {
  const { hasAuth } = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const logoutUser = async (event) => {
    dispatch({ type: 'toggleIsLoading', payload: true });
    const response = await logout();
    if (response) {
      const { success } = await response.json();
      if (success) {
        storage.set('token', '');
        dispatch({ type: 'setAuth', payload: false });
        history.push('/');
      }
      dispatch({ type: 'toggleIsLoading', payload: false });
    }
  };

  if (!hasAuth) {
    return null;
  }

  return (
    <A href="#" onClick={logoutUser}>
      <Text>Cerrar Sesion</Text>
    </A>
  );
};

export default LogoutToggle;
