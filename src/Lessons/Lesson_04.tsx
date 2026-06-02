import Modal from '@/components/Modal/Modal';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

export default function Lesson_04({ hidden = false }) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${clicks}`;
    console.log(`Clicks: `, clicks);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log('Effect');

    return () => {
      console.log('Clean up');
    };
  }, []);

  return (
    <div className={clsx('lesson-04', { hidden: hidden })}>
      <h1>Lesson 04</h1>

      <button type="button" onClick={() => setClicks(prev => prev + 1)}>
        You clicked {clicks} times
      </button>

      <br />
      <br />

      <button type="button" onClick={() => setIsModalOpen(prev => !prev)}>
        Show modal
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
}
