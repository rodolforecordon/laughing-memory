import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeckManegement from './pages/DeckManagement';
import FlashCards from './pages/FlashCards';
import LettersOut from './pages/LettersOut';
import NotFound from './pages/NotFound';
import DeckEdition from './pages/DeckEdition';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decks" element={<DeckManegement />} />
      <Route path="/flashcards/:deckId" element={<FlashCards />} />
      <Route path="/lettersout" element={<LettersOut />} />
      <Route path="/deckedition" element={<DeckEdition />} />
      <Route path="/deckedition/:deckId" element={<DeckEdition />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
