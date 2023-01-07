import { useContext } from 'react';
import NavContext from '../../contexts/NavContext';
import './Header.module.css';

const Header = () => {
  const { navBarColor, navActiveIcons } = useContext(NavContext).navBarState;

  return (
    <header style={{ backgroundColor: navBarColor }}>
      <nav>
        {navActiveIcons.map((navIcon, index) => {
          if (!navIcon) return <div key={index}></div>;
          return <div key={index}>{navIcon}</div>;
        })}
      </nav>
    </header>
  );
};

export default Header;
