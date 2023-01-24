import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeckContext } from '../../contexts/DeckContext';
import classes from './Deck.module.css';
import DeckEdit from './DeckIcons/DeckEdit';
import DeckMove from './DeckIcons/DeckMove';

type IDeck = {
  id: string;
  name: string;
};

const Deck = ({ id, name }: IDeck) => {
  const { handleDeck } = useContext(DeckContext);

  return (
    <div className={classes.deckContainer}>
      <DeckMove />

      <span className={classes.deckName} onClick={() => handleDeck(id)}>
        <Link to={`/`}>{name}</Link>
      </span>

      <Link to={`/deckedition/${id}`}>
        <DeckEdit />
      </Link>
    </div>
  );
};

export default Deck;
