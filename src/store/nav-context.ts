import React from 'react';

const NavContext = React.createContext({
  activeIcons: ['Account'],
  handleNavIcons(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {},
  navBarColor: 'pink',
  handleNavColor(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {},
});

export default NavContext;
