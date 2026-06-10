import Lesson_01 from '@/components/Lesson_01/Lesson_01';
import Lesson_02 from '@/components/Lesson_02/Lesson_02';
import Lesson_03 from '@/components/Lesson_03/Lesson_03';
import Lesson_04 from '@/components/Lesson_04/Lesson_04';
import Lesson_05 from '@/components/Lesson_05/Lesson_05';

import './App.css';
import Lesson_06 from '../Lesson_06/Lesson_06';

function App() {
  return (
    <div>
      <Lesson_01 hidden />
      <Lesson_02 hidden />
      <Lesson_03 hidden />
      <Lesson_04 hidden />
      <Lesson_05 hidden />
      <Lesson_06 />
    </div>
  );
}

export default App;
