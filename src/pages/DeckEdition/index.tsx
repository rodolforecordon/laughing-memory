import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Deck from '../../components/Deck';
import DeckForm from '../../components/Deck/DeckForm';
import NavContext from '../../contexts/NavContext';

const DeckEdition = () => {
  const { handleNavBarState } = useContext(NavContext);

  useEffect(() => {
    handleNavBarState('DeckEdition');
  }, []);

  const [deckCards, setDeckCards] = useState<string[][]>([]);
  const [deckTitle, setDeckTitle] = useState<string>('');
  const { deckId } = useParams<string>();

  return (
    <div>
      <DeckForm
        deckTitle={deckTitle}
        changeDeckTitle={setDeckTitle}
        deckCards={deckCards}
        addCards={setDeckCards}
      />
      <div>
        {deckCards.map((card) => (
          <Deck deckName={card[0]} />
        ))}
      </div>
    </div>
  );
};

export default DeckEdition;
