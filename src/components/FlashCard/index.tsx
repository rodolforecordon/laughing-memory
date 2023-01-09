import { useState } from 'react';
import classes from './FlashCard.module.css';

interface FlashCard {
  frontText: string;
  backText: string;
}

const FlashCard = ({ frontText, backText }: FlashCard) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => setFlip(!flip);

  return (
    <div
      className={`${classes.flashCard} ${flip && classes.active}`}
      onClick={handleFlip}
    >
      <div className={classes.flashCardInner}>
        <div className={classes.FlashCardFront}>{frontText}</div>
        <div className={classes.FlashCardBack}>{backText}</div>
      </div>
    </div>
  );
};

export default FlashCard;
