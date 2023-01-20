import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeckContext } from '../../../contexts/DeckContext';
import SearchIcon from '../SearchButton';
import classes from './DeckSearch.module.css';

const DeckSearch = () => {
  const { deck } = useContext(DeckContext);

  return (
    <div className={classes.searchContainer}>
      <h1>Choose a Deck:</h1>
      <div className={classes.searchInfo}>
        <span>{deck.name || 'Deck Name'}</span>
        <Link to="/decks">
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
};

export default DeckSearch;
