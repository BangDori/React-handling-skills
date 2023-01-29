import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("버튼을 클릭해주세요!");
  const [color, setColor] = useState("black");

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");
  const onClickReset = () => setMessage("버튼을 클릭해주세요!");

  return (
    <div>
      <p>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={onClickReset}>리셋</button>
      </p>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Say;
