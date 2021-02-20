import styled from 'styled-components';

import { AlignMiddle } from '../../utils/styled/helpers';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;

const FillWidth = styled(AlignMiddle)`
  width: -webkit-fill-available;
`;

const LeftSide = styled(FillWidth)``;

const RightSide = styled(FillWidth)`
  justify-content: space-around;
`;

export { Nav, FillWidth, LeftSide, RightSide };
