import { useContext, useEffect, useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import FlashCard from '../../components/FlashCard';
import { DeckContext } from '../../contexts/DeckContext';
import NavContext from '../../contexts/NavContext';
import { Card } from '../../contexts/DeckContext';
import classes from './FlashCards.module.css';

const FlashCards = () => {
  const { handleNavBarState } = useContext(NavContext);
  const { deck } = useContext(DeckContext);
  const [activeCard, setActiveCard] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([...deck.cards]);

  useEffect(() => {
    handleNavBarState('Flash Cards');
  }, []);

  const handleCardChange = (direction: string): void => {
    if (direction === 'RIGHT' && activeCard < cards.length - 1) {
      setActiveCard(activeCard + 1);
    }

    if (direction === 'LEFT' && activeCard > 0) {
      setActiveCard(activeCard - 1);
    }
  };

  return (
    <div className={classes.flashCardsMain}>
      {deck.cards
        .filter((_: null, index: number) => index === activeCard)
        .map((card: Card) => (
          <FlashCard
            key={card.id}
            frontText={card.frontText}
            backText={card.backText}
          />
        ))}
      <div className={classes.controlButtons}>
        <MdArrowBack onClick={() => handleCardChange('LEFT')} />
        <MdArrowForward onClick={() => handleCardChange('RIGHT')} />
      </div>
    </div>
  );
};

export default FlashCards;
