import { useContext, useEffect } from 'react';
import ApprovalBtn from '../../components/ActionButtons/ApprovalBtn';
import DenialBtn from '../../components/ActionButtons/DenialBtn';
import FlashCard from '../../components/FlashCard';
import NavContext from '../../contexts/NavContext';
import classes from './FlashCards.module.css';

const FlashCards = () => {
  const { handleNavBarState } = useContext(NavContext);

  useEffect(() => {
    handleNavBarState('Flash Cards');
  }, []);

  return (
    <div className={classes.flashCardsMain}>
      <FlashCard frontText="Front Text" backText="Back Text" />
      <div className={classes.controlButtons}>
        <ApprovalBtn />
        <DenialBtn />
      </div>
    </div>
  );
};

export default FlashCards;
