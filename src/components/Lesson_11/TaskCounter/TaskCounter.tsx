import { useSelector } from 'react-redux';
import type { TaskInterface } from '@/types';
import { getTasks } from '@/redux/selectors';
import styles from './TaskCounter.module.css';

interface TaskCounterInterface {
  active: number;
  completed: number;
}

function TaskCounter() {
  const tasks = useSelector(getTasks);

  const count: TaskCounterInterface = tasks.reduce(
    (acc: TaskCounterInterface, task: TaskInterface) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={styles.text}>Active: {count.active}</p>
      <p className={styles.text}>Completed: {count.completed}</p>
    </div>
  );
}
export default TaskCounter;
