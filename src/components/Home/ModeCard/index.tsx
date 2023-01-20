import { Link } from 'react-router-dom';
import classes from './ModeCard.module.css';

interface IModeCard {
  mode: string;
  bgColor: string;
  path: string;
}

const ModeCard: React.FC<IModeCard> = ({ mode, bgColor, path }) => {
  return (
    <div className={classes.memoCard} style={{ backgroundColor: bgColor }}>
      <Link to={path}>{mode}</Link>
    </div>
  );
};

export default ModeCard;
