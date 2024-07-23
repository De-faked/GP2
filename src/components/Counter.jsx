import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const min = -10;
  const max = 10;

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(Math.min(count + 1, max))}>Increment</button>
      <button onClick={() => setCount(Math.max(count - 1, min))}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
