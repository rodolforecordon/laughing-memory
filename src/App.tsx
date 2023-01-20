import { NavContextProvider } from './contexts/NavContext';
import Header from './components/Header';
import Router from './Router';
import './App.css';
import { DeckContextProvider } from './contexts/DeckContext';

function App() {
  return (
    <div className="App">
      <NavContextProvider>
        <DeckContextProvider>
          <Header />

          <main>
            <Router />
          </main>
        </DeckContextProvider>
      </NavContextProvider>
    </div>
  );
}

export default App;
