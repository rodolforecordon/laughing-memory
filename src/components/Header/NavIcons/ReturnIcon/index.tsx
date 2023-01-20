import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const ReturnIcon = () => {
  const navigate = useNavigate();
  const onClickFnCalls = () => navigate(-1);

  return (
    <div onClick={onClickFnCalls}>
      <MdArrowBack color="white" size="40px" />
    </div>
  );
};

export default ReturnIcon;
