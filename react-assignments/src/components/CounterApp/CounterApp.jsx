import React, { useState } from 'react';
import './CounterApp.css';

// Assignment 6: Counter application using useState Hook
function CounterApp() {
  // 1. Declare state variable for counter
  const [count, setCount] = useState(0);

  // 2. Handler functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-wrapper">
      <h2>Assignment 6: React Counter App</h2>
      <p className="subtitle">
        Uses React Hooks (<code>useState</code>) to increment, decrement, and reset value.
      </p>

      {/* Counter Value Display */}
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <button onClick={decrement} className="btn-counter btn-dec">Decrement (-)</button>
        <button onClick={reset} className="btn-counter btn-rst">Reset</button>
        <button onClick={increment} className="btn-counter btn-inc">Increment (+)</button>
      </div>
    </div>
  );
}

export default CounterApp;
