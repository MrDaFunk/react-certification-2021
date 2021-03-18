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
};

const reducer = (
  { isLoading, videos, isDarkmodeOn, current, showLogInModal },
  { type, payload }
) => {
  switch (type) {
    case 'toggleIsLoading':
      return {
        isLoading: payload || !isLoading,
        videos,
        isDarkmodeOn,
        current,
        showLogInModal,
      };
    case 'toggleIsDarkmodeOn':
      storage.set('isDarkModeOn', !isDarkmodeOn);
      return { isDarkmodeOn: !isDarkmodeOn, videos, isLoading, current, showLogInModal };
    case 'setVideos':
      return { videos: payload, isLoading, isDarkmodeOn, current, showLogInModal };
    case 'setCurrent':
      return { current: payload, isLoading, isDarkmodeOn, videos, showLogInModal };
    case 'toggleShowLogInModal':
      return {
        showLogInModal: payload || !showLogInModal,
        isLoading,
        isDarkmodeOn,
        videos,
        current,
      };
    default:
      throw new Error();
  }
};

const StateContext = createContext();
const DispatchContext = createContext();

const useState = () => useContext(StateContext);
const useDispatch = () => useContext(DispatchContext);

const Store = ({
  children,
  isLoading,
  videos,
  isDarkmodeOn,
  current,
  showLogInModal,
}) => {
  const list = setFavoriteList(items);

  initialState.videos = list;

  initialState.isLoading = isLoading ?? initialState.isLoading;
  initialState.videos = videos ?? initialState.videos;
  initialState.isDarkmodeOn = isDarkmodeOn ?? initialState.isDarkmodeOn;
  initialState.current = current ?? initialState.current;
  initialState.showLogInModal = showLogInModal ?? initialState.showLogInModal;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { Store, useState, useDispatch };
