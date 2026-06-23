import Navbar from "../Navbar/Navbar";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Navbar />
    </div>
  );
}

export default Sidebar
