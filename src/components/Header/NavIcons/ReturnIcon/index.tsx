import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const ReturnIcon = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <MdArrowBack color="white" size="40px" />
    </div>
  );
};

export default ReturnIcon;
