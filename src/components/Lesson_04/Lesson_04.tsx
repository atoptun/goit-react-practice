import Modal from '@/components/Lesson_04/Modal/Modal';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

export default function Lesson_04({ hidden = false }) {
  const [clicks, setClicks] = useState(() => {
    return JSON.parse(window.localStorage.getItem('saved-clicks') || '0');
  });

  useEffect(() => {
    // document.title = `Clicks: ${clicks}`;
    // console.log(`Clicks: `, clicks);
  }, [clicks]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // document.title = `You clicked ${clicks} times`;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(clicks))
  }, [clicks]);

  useEffect(() => {
    // console.log('You can see me only once!');
  }, []);

  useEffect(() => {
    // console.log('Effect');

    return () => {
      // console.log('Clean up');
    };
  }, []);

  return (
    <div className={clsx('lesson-04', { hidden: hidden })}>
      <h1>Lesson 04</h1>

      <button type="button" onClick={() => setClicks((prev: number) => prev + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <br />
      <br />

      <button type="button" onClick={() => setIsModalOpen(prev => !prev)}>
        Show modal
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
}
