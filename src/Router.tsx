import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlashCards from './pages/FlashCards';
import LettersOut from './pages/LettersOut';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flashcards" element={<FlashCards />} />
      <Route path="/lettersout" element={<LettersOut />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
