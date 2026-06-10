import { useState } from "react";

export default function Cofee() {
  const [coffeeSize, setCoffeeSize] = useState('sm');

  const handleSizeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCoffeeSize(evt.target.value);
  };

  return (
    <>
      <h2>Select coffee size</h2>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === 'sm'}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === 'md'}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === 'lg'}
          onChange={handleSizeChange}
        />
        Large
      </label>
      <p>You selected: {coffeeSize}</p>
    </>
  );
}
