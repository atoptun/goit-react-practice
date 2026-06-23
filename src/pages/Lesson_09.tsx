import { clsx } from "clsx";
import { NavLink, Outlet } from "react-router-dom";
// import Home from "@/components/Lesson_09/pages/Home";
// import About from '@/components/Lesson_09/pages/About.tsx';
// import Products from "@/components/Lesson_09/pages/Products";
// import NotFound from "@/components/Lesson_09/pages/NotFound";
import styles from '@/components/Lesson_09/Lesson_09.module.css'
import { Suspense } from "react";


const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(styles.link, isActive && styles.active);
};

function Lesson_09() {
  return (
    <div>
      <h1>Lesson 09</h1>
      <hr />
      <nav className={styles.nav}>
        <NavLink to="" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <div style={{ marginTop: '20px' }}>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
export default Lesson_09;
