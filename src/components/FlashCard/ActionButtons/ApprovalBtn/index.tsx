import { MdDone } from 'react-icons/md';
import classes from './ApprovalBtn.module.css';

const ApprovalBtn = () => (
  <button className={classes.approval}>
    <MdDone color="white" size="3.5rem" />
  </button>
);

export default ApprovalBtn;
