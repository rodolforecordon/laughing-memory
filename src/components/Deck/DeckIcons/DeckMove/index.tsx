import { MdDragIndicator } from 'react-icons/md';
import classes from './DeckMove.module.css';

const DeckMove = () => {
  return (
    <div className={classes.moveContainer}>
      <MdDragIndicator color="#686868" size="45px" />
    </div>
  );
};

export default DeckMove;
