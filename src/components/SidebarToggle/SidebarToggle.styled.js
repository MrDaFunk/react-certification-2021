import styled from 'styled-components';

import { sm } from '../../utils/constants/responsive-sizes';

import { Bars } from '../../utils/styled/icons';

const BarsIcon = styled(Bars)`
  margin-left: 2em;
  display: none;

  @media screen and (max-width: ${sm}) {
    display: block;
  }
`;

export { BarsIcon };
