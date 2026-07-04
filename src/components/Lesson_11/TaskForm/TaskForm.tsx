import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import styles from './TaskForm.module.css';
import { addTask } from '@/redux/taskSlice';

function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value.trim();
    if (!text) {
      alert('Please enter a task text');
      return;
    }
    dispatch(addTask(text));
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
