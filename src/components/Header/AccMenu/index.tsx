import { Link } from 'react-router-dom';
import './AccMenu.module.css';

const accMenu = [
  { to: '/signin', label: 'Login' },
  { to: '/settings', label: 'Settings' },
  { to: '/logout', label: 'Logout' },
];

const AccMenu = ({ changeVis }) => {
  return (
    <menu>
      {accMenu.map((li) => (
        <li onClick={changeVis}>
          <Link to={li.to} key={li.label}>
            {li.label}
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default AccMenu;
