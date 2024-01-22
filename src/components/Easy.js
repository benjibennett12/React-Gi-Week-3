import React, { useState } from 'react'

export default function Easy() {

    const [count, setCount] = useState(0);

  function Counter() {
    setCount((c) => c + 1);
  }

  function Minuser() {
    setCount((c) => c - 1);
  }

  return (
    <div className="App">
      <button className="plusButton" onClick={Counter}>
        Counter
      </button>
      <button className="minusButton" onClick={Minuser}>
        Minuser
      </button>
      <h1>{count}</h1>
    </div>
  );
}


