import { useContext } from "react";
import ColorContext from "../contexts/color";

/**
 * props로 상태를 받아 오는 것이 아니라,
 * ColorContext 안에 들어 있는 Consumer라는
 * 컴포넌트를 통해 색상을 조회
 */
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
