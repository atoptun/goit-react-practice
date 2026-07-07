import Task from '../Task/Task';
import styles from './TaskList.module.css';
import {
  // selectVisibleRemoteTasks,
  selectVisibleRemoteTasksMemoized
} from '@/redux/selectors';
import { useAppSelector } from '@/redux/hooks';

function TaskList() {
  const visibleTasks = useAppSelector(selectVisibleRemoteTasksMemoized);

  return (
    <ul className={styles.list}>
      {visibleTasks.map(task => (
        <li className={styles.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
