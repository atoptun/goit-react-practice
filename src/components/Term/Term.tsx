import { useState } from 'react';

export default function Term() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <h2>Terms and Conditions</h2>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <br />
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
}
