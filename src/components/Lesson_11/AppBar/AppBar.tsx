import StatusFilter from '../StatusFilter/StatusFilter';
import TaskCounter from '../TaskCounter/TaskCounter';
import styles from './AppBar.module.css'

function AppBar() {
  return (
    <header className={styles.wrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
}
export default AppBar
