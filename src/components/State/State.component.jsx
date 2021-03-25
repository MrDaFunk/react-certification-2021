import React, { useReducer, createContext, useContext } from 'react';

import { storage } from '../../utils/storage';
import { items } from '../../assets/mock/videolist.mock.json';

import { setFavoriteList } from '../../utils/fns';

const initialState = {
  isLoading: false,
  videos: [],
  isDarkmodeOn: storage.get('isDarkModeOn') ?? true,
  current: '',
  showLogInModal: false,
  hasAuth: storage.get('token') ?? false,
};

const reducer = (props, { type, payload }) => {
  const { isLoading, isDarkmodeOn, showLogInModal } = props;
  switch (type) {
    case 'toggleIsLoading':
      return { ...props, isLoading: payload || !isLoading };
    case 'toggleIsDarkmodeOn':
      storage.set('isDarkModeOn', !isDarkmodeOn);
      return { ...props, isDarkmodeOn: !isDarkmodeOn };
    case 'setVideos':
      return { ...props, videos: payload };
    case 'setCurrent':
      return { ...props, current: payload };
    case 'toggleShowLogInModal':
      return { ...props, showLogInModal: payload || !showLogInModal };
    case 'setAuth':
      return { ...props, hasAuth: payload };
    default:
      throw new Error(`Unkown action type: '${type}'`);
  }
};

const StateContext = createContext();
const DispatchContext = createContext();

const useState = () => useContext(StateContext);
const useDispatch = () => useContext(DispatchContext);

const State = ({
  children,
  isLoading,
  videos,
  isDarkmodeOn,
  current,
  showLogInModal,
  hasAuth,
}) => {
  const list = setFavoriteList(items);

  initialState.videos = list;

  initialState.isLoading = isLoading ?? initialState.isLoading;
  initialState.videos = videos ?? initialState.videos;
  initialState.isDarkmodeOn = isDarkmodeOn ?? initialState.isDarkmodeOn;
  initialState.current = current ?? initialState.current;
  initialState.showLogInModal = showLogInModal ?? initialState.showLogInModal;
  initialState.hasAuth = hasAuth ?? initialState.hasAuth;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { State as default, useState, useDispatch };
