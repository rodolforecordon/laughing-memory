import { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import AccMenu from './AccMenu';
import './Header.module.css';

const Header = () => {
  const [menuVis, setMenuVis] = useState(false);
  const handleMenuVis = () => setMenuVis(!menuVis);

  return (
    <header>
      <nav>
        <div onClick={handleMenuVis}>
          <MdAccountCircle color="white" size="40px" />
        </div>
        {menuVis && <AccMenu changeVis={handleMenuVis} />}
      </nav>
    </header>
  );
};

export default Header;
