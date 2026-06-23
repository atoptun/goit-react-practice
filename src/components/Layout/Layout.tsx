import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './Layout.module.css';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className={styles.gridContainer}>
      <header className={styles.headerZone}>
        <Header />
      </header>

      <aside className={styles.sidebarZone}>
        <Sidebar />
      </aside>

      <main className={styles.mainZone}>
        <Main />
      </main>
    </div>
  );
};

export default Layout;
