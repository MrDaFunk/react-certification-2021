import React from 'react';

import { SearchIcon } from './Search.styled';
import { Input } from '../../utils/styled/elements';

import { searchVideo } from '../../utils/services';

const Search = ({ searchVideoList }) => {
  const searchHandler = (event) => {
    if (event.key === 'Enter') {
      searchVideo(event.target.value)
        .then(({items}) => {
          searchVideoList(items);
        });
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
