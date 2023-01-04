import ModeCard from '../../components/ModeCard';
import './Home.module.css';

interface IMemoModes {
  mode: string;
  bgColor: string;
  path: string;
}

const memoModes: IMemoModes[] = [
  { mode: 'Flash Cards', bgColor: '#14AE5C', path: '/flashcards' },
  { mode: 'Letters Out', bgColor: '#F24822', path: '/lettersout' },
  { mode: 'Mode 2', bgColor: '#0D99FF', path: '/' },
  { mode: 'Mode 3', bgColor: '#FFCD29', path: '/' },
];

const Home = () => {
  return (
    <section>
      {memoModes.map((card) => (
        <ModeCard {...card} key={card.mode} />
      ))}
    </section>
  );
};

export default Home;
