import { useContext, useEffect } from 'react';
import NavContext from '../../contexts/NavContext';

const LettersOut = () => {
  const { handleNavBarState } = useContext(NavContext);

  useEffect(() => {
    handleNavBarState('Letters Out');
  }, []);

  return (
    <div>
      <h1>Letters Out</h1>
    </div>
  );
};

export default LettersOut;
