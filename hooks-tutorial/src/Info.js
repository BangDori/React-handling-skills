//// App.js
// import { useState } from "react";
// import Info from "./Info";

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   const onVisible = () => {
//     setVisible(!visible);
//   };

//   return (
//     <>
//       <button onClick={onVisible}>{visible ? "보이기" : "숨기기"}</button>
//       <hr />
//       {visible && <Info />}
//     </>
//   );
// };

// export default App;

import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickname} onChange={onChangeNickname} />

      <p>
        이름: {name} <br />
        닉네임: {nickname}
      </p>
    </div>
  );
};

export default Info;
