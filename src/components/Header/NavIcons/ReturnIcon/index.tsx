import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { useContext } from 'react';
import NavContext from '../../../../contexts/NavContext';

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

const ReturnIcon = () => {
  const { handleNavBarState } = useContext(NavContext);
  const navigate = useNavigate();

  const onClickFnCalls = (e: Event) => {
    handleNavBarState(e);
    navigate('/');
  };

  return (
    <div onClick={onClickFnCalls}>
      <MdArrowBack color="white" size="40px" />
    </div>
  );
};

export default ReturnIcon;
