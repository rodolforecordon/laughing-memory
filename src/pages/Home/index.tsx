import { useContext, useEffect } from 'react';
import { NavContext } from '../../contexts/NavContext';
import ModeCard from '../../components/Home/ModeCard';
import classes from './Home.module.css';
import DeckSearch from '../../components/Home/DeckSearch';

const Home = () => {
  const { memoModes, handleNavBarState } = useContext(NavContext);

  useEffect(() => {
    handleNavBarState('Home');
  }, []);

  return (
    <section>
      <DeckSearch />
      <div className={classes.homeSection}>
        {memoModes
          .filter(({ mode }) => ['Flash Cards', 'Letters Out'].includes(mode))
          .map((card) => (
            <ModeCard {...card} key={card.mode} />
          ))}
      </div>
    </section>
  );
};

export default Home;
