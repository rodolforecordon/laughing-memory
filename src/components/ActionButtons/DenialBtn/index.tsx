import { MdClose } from 'react-icons/md';
import classes from './DenialBtn.module.css';

const DenialBtn = () => (
  <button className={classes.denial}>
    <MdClose color="white" size="3.5rem" />
  </button>
);

export default DenialBtn;
