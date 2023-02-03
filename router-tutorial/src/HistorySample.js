import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const navigate = useNavigate();

  // 뒤로 가기
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button name="back" onClick={handleGoBack}>
        뒤로
      </button>
      <button name="go" onClick={handleGoHome}>
        홈으로
      </button>
    </div>
  );
};

export default HistorySample;
