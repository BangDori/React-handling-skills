import { increaseAsync, decreaseAsync } from "../modules/counter";
// import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
// import { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  // const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  // const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
