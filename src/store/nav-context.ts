import React from 'react';

const NavContext = React.createContext({
  activeIcons: ['Account'],
  handleNavIcons(iconNames: string[]) {},
  navBarColor: 'pink',
});

export default NavContext;
