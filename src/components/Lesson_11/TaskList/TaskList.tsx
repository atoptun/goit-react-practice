import type { TaskInterface, AppState, FilterValue } from '@/types';
import Task from '../Task/Task';
import styles from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { selectStatusFilter, selectTasks } from '@/redux/selectors';

const getVisibleTasks = (
  tasks: TaskInterface[],
  statusFilter: FilterValue
): TaskInterface[] => {
  switch (statusFilter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

function TaskList() {
  const tasks = useSelector(selectTasks);
  const statusFilter = useSelector(selectStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

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
