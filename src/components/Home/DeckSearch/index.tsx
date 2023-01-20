import { Link } from 'react-router-dom';
import SearchIcon from '../SearchButton';
import classes from './DeckSearch.module.css';

const DeckSearch = () => {
  return (
    <div className={classes.searchContainer}>
      <h1>Choose a Deck:</h1>
      <div className={classes.searchInfo}>
        {true && 'Deck Name'}
        <button>
          <Link to="/decks">
            <SearchIcon />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DeckSearch;
