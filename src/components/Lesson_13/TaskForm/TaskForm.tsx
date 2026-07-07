import Button from '../Button/Button';
import styles from './TaskForm.module.css';
import { addRemoteTask } from '@/redux/operations';
import { useAppDispatch } from '@/redux/hooks';

function TaskForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value.trim();
    if (!text) {
      alert('Please enter a task text');
      return;
    }
    dispatch(addRemoteTask(text));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
}
export default TaskForm;
