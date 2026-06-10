import { useState } from 'react';

export default function ObjectClicker() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const handleXClick = () => {
    setValues(prev => ({ ...prev, x: prev.x + 1 }));
  };

  const handleYClick = () => {
    setValues(prev => ({ ...prev, y: prev.y + 1 }));
  };

  return (
    <div>
      <button onClick={handleXClick}>X: {values.x}</button>
      <button onClick={handleYClick}>Y: {values.y}</button>
    </div>
  );
}
