import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>Count: {count}</p>
      <button className="button increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="button decrement" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
