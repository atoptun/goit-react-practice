import { useState } from 'react';
import MessageButton from '@/components/Lesson_03/MessageButton/MessageButton';
import clsx from 'clsx';
import ClickCounter from '@/components/Lesson_03/ClickCounter/ClickCounter';
import ClickCounterShared from '@/components/Lesson_03/ClickCounterShared/ClickCounterShared';
import ObjectClicker from '@/components/Lesson_03/ObjectClicker/ObjectClicker';

export default function Lesson_03({ hidden = false }) {
  const [clicks, setClicks] = useState(0);
  const handleLogClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt);
  };

  const [isOpen, setIsOpen] = useState(true);
  const handleCountClick = () => {
    setClicks(prev => prev + 1);
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const [sharedCounter, setSharedCounter] = useState(0);
  const handleSharedCounterClick = () => {
    setSharedCounter(prev => prev + 1);
  };

  return (
    <div className={clsx('lesson-03', { hidden: hidden })}>
      <h1>Lesson 03</h1>
      <hr />
      <button onClick={handleLogClick}>Click me - see log</button>
      <br />
      <button onClick={() => alert("I'm a button inline!")}>
        Click me inline!
      </button>
      <br />
      <MessageButton message="I'm a message from MessageButton component!">
        Click me from MessageButton!
      </MessageButton>
      <br />
      <button onClick={handleCountClick}>Clicks: {clicks}</button>
      <br />
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>Now you can see me!</p>}
      <br />
      <p>Independent counters:</p>
      <ClickCounter />
      <br />
      <ClickCounter />
      <br />
      <br />
      <p>Shared counter:</p>
      <ClickCounterShared
        value={sharedCounter}
        onClick={handleSharedCounterClick}
      />
      <br />
      <ClickCounterShared
        value={sharedCounter}
        onClick={handleSharedCounterClick}
      />
      <br />
      <p>Object Clicker</p>
      <ObjectClicker />
      <br />
    </div>
  );
}
