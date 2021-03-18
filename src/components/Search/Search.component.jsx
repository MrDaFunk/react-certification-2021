import React from 'react';

import { SearchIcon } from './Search.styled';
import { Input } from '../../utils/styled/elements';

import { searchVideoList } from '../../utils/services';
import { setFavoriteList } from '../../utils/fns';

import { useDispatch } from '../Store';

const Search = () => {
  const dispatch = useDispatch();

  const searchHandler = async ({ key, target: { value } }) => {
    if (key === 'Enter' && value !== '') {
      dispatch({ type: 'toggleIsLoading', payload: true });
      const response = await searchVideoList(value);
      if (response) {
        const { items } = await response.json();

        const list = setFavoriteList(items);
        dispatch({ type: 'setVideos', payload: list });
      }
      dispatch({ type: 'toggleIsLoading', payload: false });
    }
  };

  return (
    <>
      <SearchIcon />
      <Input type="text" placeholder="Buscar" onKeyPress={searchHandler} />
    </>
  );
};

export default Search;
