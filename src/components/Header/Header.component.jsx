import React from 'react';

import { Nav, LeftSide, RightSide } from './Header.styled';

import DarkModeToggle from '../DarkModeToggle';
import SidebarToggle from '../SidebarToggle';
import LoginToggle from '../LoginToggle';
import Search from '../Search';

const Header = ({
  searchVideoList,
  isDarkModeOn,
  toggleDarkMode,
  setIsLoading,
  toggleLogInModal,
}) => (
  <Nav>
    <LeftSide>
      <SidebarToggle />
      <Search setVideoList={searchVideoList} setIsLoading={setIsLoading} />
    </LeftSide>
    <RightSide>
      <DarkModeToggle isDarkModeOn={isDarkModeOn} toggleDarkMode={toggleDarkMode} />
      <LoginToggle toggleLogInModal={toggleLogInModal} />
    </RightSide>
  </Nav>
);

export default Header;
