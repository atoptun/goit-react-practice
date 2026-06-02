import { useEffect } from 'react';

export default function Modal() {
  useEffect(() => {
    console.log('Set interval');
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);

    return () => {
      console.log('Clear interval');
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
}
