import { useState } from 'react';

export default function ClickCounter() {
  const [counter, setCounter] = useState(0);

  const handleCounterClick = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <button type="button" onClick={handleCounterClick}>
      Counter: {counter}
    </button>
  );
}
