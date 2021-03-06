import styled from 'styled-components';

import { sm } from '../../utils/constants/responsive-sizes';

import { Search } from '../../utils/styled/icons';

const SearchIcon = styled(Search)`
  margin-right: 0.5em;
  margin-left: 2em;

  @media screen and (max-width: ${sm}) {
    margin-right: 0.5em;
  }
`;

export { SearchIcon };
