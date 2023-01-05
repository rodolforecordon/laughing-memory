import { useState, useContext } from 'react';
import ReturnIcon from './NavIcons/ReturnIcon';
import AccountIcon from './NavIcons/AccountIcon';
import NavContext from '../../store/nav-context';
import './Header.module.css';

const Header = () => {
  const { navBarColor } = useContext(NavContext);

  const [leftIcon, setLeftIcon] = useState(<ReturnIcon />);
  const [centerIcon, setCenterIcon] = useState(<span>center</span>);
  const [rightIcon, setRightIcon] = useState(<AccountIcon />);

  return (
    <header style={{ backgroundColor: navBarColor }}>
      <nav>
        {true && leftIcon}
        {true && centerIcon}
        {true && rightIcon}
      </nav>
    </header>
  );
};

export default Header;
