import { Link } from 'react-router-dom';
import './AccMenu.module.css';

const AccMenu = () => {
  return (
    <menu>
      <li>
        <Link to="/signin">Login</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </menu>
  );
};

export default AccMenu;
