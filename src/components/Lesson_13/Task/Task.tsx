import { MdClose } from 'react-icons/md';
import styles from './Task.module.css';
import { type RemoteTaskInterface } from '@/types';
import { deleteRemoteTask, toggleRemoteCompleted } from '@/redux/operations';
import { useAppDispatch } from '@/redux/hooks';

interface TaskProps {
  task: RemoteTaskInterface;
}

function Task({ task }: TaskProps) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteRemoteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleRemoteCompleted(task));
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={styles.text}>{task.text}</p>
      <button className={styles.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
}
export default Task;
