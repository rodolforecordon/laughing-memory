import Header from './components/Header';
import ModeCard from './components/ModeCard';
import './App.css';

interface IMemoModes {
  mode: string;
  bgColor: string;
}

const memoModes: IMemoModes[] = [
  { mode: 'Flash Cards', bgColor: '#14AE5C' },
  { mode: 'Letters Out', bgColor: '#F24822' },
  { mode: 'Mode 2', bgColor: '#0D99FF' },
  { mode: 'Mode 3', bgColor: '#FFCD29' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {memoModes.map((card) => (
          <ModeCard {...card} />
        ))}
      </main>
    </div>
  );
}

export default App;
