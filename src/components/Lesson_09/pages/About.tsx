import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import styles from './About.module.css'


const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(styles.link, isActive && styles.active);
};

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>We are a cool team building awesome React apps!</p>

      {/* Навігація всередині сторінки About */}
      <nav style={{ display: 'flex', gap: '15px', margin: '15px 0' }}>
        <NavLink to="mission" className={buildLinkClass}>Our Mission</NavLink>
        <NavLink to="team" className={buildLinkClass}>Our Team</NavLink>
        <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink>
      </nav>

      <hr />

      {/* 🌟 Тут рендеритимуться вкладені компоненти (Mission або Team) */}
      <div style={{ marginTop: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}
export default About;
