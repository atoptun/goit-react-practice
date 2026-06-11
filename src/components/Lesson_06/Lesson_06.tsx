import clsx from 'clsx';
import FeedbackForm from './FeedbackForm/FeedbackForm';

function Lesson_06({ hidden = false }) {
  return (
    <div className={clsx('lesson-06', { hidden: hidden })}>
      <h1>Lesson_06</h1>
      <FeedbackForm />
    </div>
  );
}

export default Lesson_06;
