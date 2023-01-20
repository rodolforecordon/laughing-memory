import { MdEdit } from 'react-icons/md';
import classes from './DeckEdit.module.css';

const DeckEdit = () => {
  return (
    <div className={classes.editContainer}>
      <MdEdit color="#686868" size="45px" />
    </div>
  );
};

export default DeckEdit;
