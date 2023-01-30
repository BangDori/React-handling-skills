import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const IncrementValue = () => setValue(value + 1);
  const DecrementValue = () => setValue(value - 1);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={IncrementValue}>증가</button>
      <button onClick={DecrementValue}>감소</button>
    </div>
  );
};

export default Counter;
