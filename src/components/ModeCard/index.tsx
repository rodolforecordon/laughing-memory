import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from '../../contexts/NavContext';
import classes from './ModeCard.module.css';

interface IModeCard {
  mode: string;
  bgColor: string;
  path: string;
}

const ModeCard: React.FC<IModeCard> = ({ mode, bgColor, path }) => {
  const { handleNavColor } = useContext(NavContext);

  return (
    <div
      className={classes.memoCard}
      style={{ backgroundColor: bgColor }}
      onClick={(e) => handleNavColor(e)}
    >
      <Link to={path}>{mode}</Link>
    </div>
  );
};

export default ModeCard;
