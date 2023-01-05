import { Link } from 'react-router-dom';
import './AccMenu.module.css';

interface ChangeVis {
  changeVis: () => void;
}

const accMenu = [
  { to: '/signin', label: 'Login' },
  { to: '/settings', label: 'Settings' },
  { to: '/logout', label: 'Logout' },
];

const AccMenu: React.FC<ChangeVis> = ({ changeVis }) => {
  return (
    <menu>
      {accMenu.map((li) => (
        <li onClick={changeVis} key={li.label}>
          <Link to={li.to}>{li.label}</Link>
        </li>
      ))}
    </menu>
  );
};

export default AccMenu;
