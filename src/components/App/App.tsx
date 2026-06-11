import { lazy, Suspense } from 'react';
import './App.css';

const Lesson_01 = lazy(() => import('../Lesson_01/Lesson_01'));
const Lesson_02 = lazy(() => import('../Lesson_02/Lesson_02'));
const Lesson_03 = lazy(() => import('../Lesson_03/Lesson_03'));
const Lesson_04 = lazy(() => import('../Lesson_04/Lesson_04'));
const Lesson_05 = lazy(() => import('../Lesson_05/Lesson_05'));
const Lesson_06 = lazy(() => import('../Lesson_06/Lesson_06'));
const Lesson_07 = lazy(() => import('../Lesson_07/Lesson_07'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading lesson...</div>}>
        {[].length !== 0 ? <Lesson_02 hidden /> : null}
        {[].length !== 0 ? <Lesson_01 hidden /> : null}
        {[].length !== 0 ? <Lesson_03 hidden /> : null}
        {[].length !== 0 ? <Lesson_04 hidden /> : null}
        {[].length !== 0 ? <Lesson_05 hidden /> : null}
        {[].length !== 0 ? <Lesson_06 hidden /> : null}
        {[].length === 0 ? <Lesson_07 /> : null}
      </Suspense>
    </div>
  );
}

export default App;
