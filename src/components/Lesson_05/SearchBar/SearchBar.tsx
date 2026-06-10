import { useState } from 'react';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  return (
    <>
      <div>SearchBar</div>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Echo: {inputValue}</p>
      </div>
    </>
  );
}
