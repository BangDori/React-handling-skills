import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();
  const showDetail = searchParams.get("detail") === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <p>detail 값을 {showDetail ? "true" : "false"}로 설정하셨군요!</p>
    </div>
  );
};

export default About;
