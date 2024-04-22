"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className="text-3xl">{counter}</h2>
      <button
        className="btn btn-secondary"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
