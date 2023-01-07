import { useContext } from 'react';
import ModeCard from '../../components/ModeCard';
import { NavContext } from '../../contexts/NavContext';
import './Home.module.css';

const Home = () => {
  const { memoModes } = useContext(NavContext);

  return (
    <section>
      {memoModes
        .filter(({ mode }) => mode !== 'Home')
        .map((card) => (
          <ModeCard {...card} key={card.mode} />
        ))}
    </section>
  );
};

export default Home;
