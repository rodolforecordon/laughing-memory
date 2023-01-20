import { useState } from 'react';
import AccMenu from '../../AccMenu';
import { MdAccountCircle } from 'react-icons/md';

const AccountIcon = () => {
  const [menuVis, setMenuVis] = useState(false);
  const handleMenuVis = () => setMenuVis(!menuVis);

  return (
    <div onClick={handleMenuVis} style={{ cursor: 'pointer' }}>
      <MdAccountCircle color="white" size="40px" />
      {menuVis && <AccMenu changeVis={handleMenuVis} />}
    </div>
  );
};

export default AccountIcon;
