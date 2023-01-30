import React, { useState, useRef } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const inputBox = useRef();

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    let nextNames = names.concat({ id: nextId, text: inputText });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");

    inputBox.current.focus();
  };

  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onRemove = (e) => {
    const nextNames = names.filter(
      (name) => name.id !== Number(e.target.value)
    );
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id}>
      {name.text}
      <button value={name.id} onClick={onRemove}>
        삭제
      </button>
    </li>
  ));

  return (
    <>
      <input
        ref={inputBox}
        type="text"
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
