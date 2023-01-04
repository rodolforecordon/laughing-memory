import { Link } from 'react-router-dom';
import classes from './ModeCard.module.css';

const ModeCard = ({
  mode,
  bgColor,
  path,
}: {
  mode: string;
  bgColor: string;
  path: string;
}) => (
  <div className={classes.memoCard} style={{ background: bgColor }}>
    <Link to={path}>{mode}</Link>
  </div>
);

export default ModeCard;
