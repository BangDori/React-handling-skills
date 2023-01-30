import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="nickname" value={nickname} onChange={onChange} />
      <br />
      이름: {name} <br />
      닉네임: {nickname}
    </div>
  );
};

export default Info;
