import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  // 첫 번째 파라미터에는 리듀서 함수, 두 번째 파라미터에는 해당 리듀서의 기본값
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const IncrementValue = () => dispatch({ type: "INCREMENT" });
  const DecrementValue = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <p>Counter: {state.value}</p>
      <button onClick={IncrementValue}>증가</button>
      <button onClick={DecrementValue}>감소</button>
    </div>
  );
};

export default CounterReducer;
