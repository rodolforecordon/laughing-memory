import { NavContextProvider } from './contexts/NavContext';
import Header from './components/Header';
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavContextProvider>
        <Header />
        <main>
          <Router />
        </main>
      </NavContextProvider>
    </div>
  );
}

export default App;
