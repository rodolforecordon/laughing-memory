import Deck from '../../components/Deck';
import classes from './DeckManagement.module.css';

const DeckManegement = () => {
  const decks = ['Deck 1', 'Deck 2', 'Deck 3'];

  return (
    <div className={classes.decksMain}>
      <h1>Decks</h1>
      {decks.map((deck) => (
        <Deck deckName={deck} />
      ))}
    </div>
  );
};

export default DeckManegement;
