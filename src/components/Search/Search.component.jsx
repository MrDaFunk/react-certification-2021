import React from 'react';

import { SearchIcon } from './Search.styled';
import { Input } from '../../utils/styled/elements';

const Search = () => {
  return (
    <>
      <SearchIcon />
      <Input type="text" placeholder="Buscar" />
    </>
  );
};

export default Search;
