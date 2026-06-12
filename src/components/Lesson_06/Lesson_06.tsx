import clsx from 'clsx';
import FeedbackForm, {
  type FeedbackFormValues,
} from './FeedbackForm/FeedbackForm';

function Lesson_06({ hidden = false }) {
  const handleSubmit = (values: FeedbackFormValues) => {
    console.info(values);
  };

  return (
    <div className={clsx('lesson-06', { hidden: hidden })}>
      <h1>Lesson_06</h1>
      <hr />
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Lesson_06;
