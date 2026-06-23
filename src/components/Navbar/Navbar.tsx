import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { LESSONS } from '../../lessons';
import styles from './Navbar.module.css';

interface NavLinkRenderProps {
  isActive: boolean;
}

const buildNavLinkClass = ({ isActive }: NavLinkRenderProps): string => {
  return clsx(styles.link, isActive && styles.active);
};

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" className={buildNavLinkClass}>
        Home
      </NavLink>

      {LESSONS.map(lesson => {
        const lessonNumber = String(lesson.id).padStart(2, '0');

        return (
          <NavLink
            key={lesson.id}
            to={`/${lesson.path}`}
            className={buildNavLinkClass}
          >
            Topic {lessonNumber}: {lesson.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navbar;
