import React from 'react';

import { SearchIcon } from './Search.styled';
import { Input } from '../../utils/styled/elements';

import { searchVideoList } from '../../utils/services';
import { errorMessage } from '../../utils/constants/api';

const Search = ({ setVideoList, setIsLoading }) => {
  const searchHandler = async (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      try {
        setIsLoading(true);
        const response = await searchVideoList(event.target.value);
        if (!response.ok) {
          throw Error(`${errorMessage} ${response.statusText}`);
        }
        const { items } = await response.json();
        setVideoList(items);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
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
