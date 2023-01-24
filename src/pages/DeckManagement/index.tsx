import { useContext, useEffect } from 'react';
import Deck from '../../components/Deck';
import NavContext from '../../contexts/NavContext';
import classes from './DeckManagement.module.css';

interface IDeck {
  id: string;
  name: string;
}

const decks: IDeck[] = [
  {
    id: '001',
    name: 'Deck Test 1',
  },
  {
    id: '002',
    name: 'Deck Test 2',
  },
];

const DeckManegement = () => {
  const { handleNavBarState } = useContext(NavContext);

  useEffect(() => {
    handleNavBarState('Choose/Create a Deck');
  }, []);

  return (
    <div className={classes.decksMain}>
      <h1>Decks</h1>
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>
            <Deck {...deck} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeckManegement;
