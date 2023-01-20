import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './AddIcon.module.css';

const AddIcon = () => {
  return (
    <div className={classes.addIcon}>
      <Link to="/deckedition">
        <MdAdd color="white" size="40px" />
      </Link>
    </div>
  );
};

export default AddIcon;
