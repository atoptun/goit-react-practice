import { useAppSelector } from '@/redux/hooks';
import { selectRemoteTaskCointsMemoized } from '@/redux/selectors';
import styles from './TaskCounter.module.css';

function TaskCounter() {
  const count = useAppSelector(selectRemoteTaskCointsMemoized);

  return (
    <div>
      <p className={styles.text}>Active: {count.active}</p>
      <p className={styles.text}>Completed: {count.completed}</p>
    </div>
  );
}

export default TaskCounter;
