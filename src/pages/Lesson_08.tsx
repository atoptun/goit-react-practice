import { forwardRef, useEffect, useRef, useState } from 'react';
import MemoExample from '@/components/Lesson_08/MemoExample/MemoExample';
import VideoPlayer from '@/components/Lesson_08/VideoPlayer/VideoPlayer';
import ComponentA from '@/components/Lesson_08/ComponentA/ComponentA';
import FirstLevel from '@/components/Lesson_08/FirstLevel/FirstLevel';
import { counterContext } from '@/components/Lesson_08/counterContext.ts';
import UserProvider from '@/components/Lesson_08/UserProvider/UserProvider.tsx';

const counterObj = {
  counter: 0,
};

function Lesson_08() {
  const [counter, setCounter] = useState(counterObj);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => btnRef.current?.focus(), []);

  return (
    <UserProvider>
      <div>
        <h1>Lesson 08</h1>
        <hr />
        <MemoExample />
        <hr />
        <VideoPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
        <hr />
        <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
        <hr />
        <ComponentA />
        <hr />
        <button
          onClick={() =>
            setCounter(prev => ({ ...prev, counter: prev.counter + 1 }))
          }
        >
          Inc counter {counter.counter}
        </button>
        <counterContext.Provider value={counter}>
          <FirstLevel />
        </counterContext.Provider>
      </div>
    </UserProvider>
  );
}
export default Lesson_08;

const CustomButton = forwardRef(
  (props: { children: React.ReactNode }, ref: React.Ref<HTMLButtonElement>) => (
    <button ref={ref}>{props.children}</button>
  )
);
