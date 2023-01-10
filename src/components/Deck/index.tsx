import classes from './Deck.module.css';
import DeckEdit from './DeckIcons/DeckEdit';
import DeckMove from './DeckIcons/DeckMove';

type deck = { deckName: string };

const Deck = ({ deckName }: deck) => {
  return (
    <div className={classes.deckContainer}>
      <DeckMove />
      <span className={classes.deckName}>{deckName}</span>
      <DeckEdit />
    </div>
  );
};

export default Deck;
