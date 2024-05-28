import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  return (
    <div>
      <p>Count: {count}</p>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>
    </div>
  );
};

export default Counter;
