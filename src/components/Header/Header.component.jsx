import React from 'react';

import { Nav, LeftSide, RightSide } from './Header.styled';

import DarkModeToggle from '../DarkModeToggle';
import SidebarToggle from '../SidebarToggle';
import LoginToggle from '../LoginToggle';
import Search from '../Search';

const Header = ({ searchVideoList, isDarkModeOn, toggleDarkMode }) =>
  <Nav>
    <LeftSide>
      <SidebarToggle />
      <Search searchVideoList={searchVideoList} />
    </LeftSide>
    <RightSide>
      <DarkModeToggle isDarkModeOn={isDarkModeOn} toggleDarkMode={toggleDarkMode} />
      <LoginToggle />
    </RightSide>
  </Nav>;

export default Header;
