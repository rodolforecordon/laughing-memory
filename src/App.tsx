import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FlashCards from './pages/FlashCards';
import LettersOut from './pages/LettersOut';
import NotFound from './pages/NotFound';
import NavContext from './store/nav-context';
import './App.css';

function App() {
  const [activeIcons, setActiveIcons] = useState(['Account']);
  const handleNavIcons = (iconNames: string[]) =>
    setActiveIcons([...iconNames]);

  return (
    <div className="App">
      <NavContext.Provider
        value={{
          activeIcons,
          handleNavIcons,
          navBarColor: 'blue',
        }}
      >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<FlashCards />} />
            <Route path="/lettersout" element={<LettersOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </NavContext.Provider>
    </div>
  );
}

export default App;
