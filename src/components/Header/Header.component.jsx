import React from 'react';

import { Nav, LeftSide, RightSide } from './Header.styled';

import DarkModeToggle from '../DarkModeToggle';
import SidebarToggle from '../SidebarToggle';
import LoginToggle from '../LoginToggle';
import Search from '../Search';

const Header = () => {
  return (
    <Nav>
      <LeftSide>
        <SidebarToggle />
        <Search />
      </LeftSide>
      <RightSide>
        <DarkModeToggle />
        <LoginToggle />
      </RightSide>
    </Nav>
  );
};

export default Header;
