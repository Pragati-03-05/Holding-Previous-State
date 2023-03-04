import React, { useState, useEffect } from 'react';
import './style.css';
import PrevState from './PrevState';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div> Previous Value : {<PrevState count={count} />}</div>
      <div> Current Value : {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
