import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <Suspense fallback={<div>Loading lesson component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default Main;
