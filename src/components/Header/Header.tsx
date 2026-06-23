import { useMatches, type UIMatch } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { LESSONS } from '@/lessons';

interface RouteHandle {
  crumb?: string;
}

function Header() {
  // Variant 1
  // const location = useLocation();

  // // Розбиваємо шлях на сегменти і видаляємо порожні елементи
  // const pathSegments = location.pathname.split('/').filter(Boolean);

  // // Перший сегмент — це слаг уроку (наприклад, "lesson-09-react-router-library")
  // const lessonSlug = pathSegments[0];
  // // Другий сегмент — це підсторінка (наприклад, "about" або "products")
  // const subPageSlug = pathSegments[1];

  // // Шукаємо поточний урок за його слагом
  // const currentLesson = LESSONS.find(lesson => lesson.path === lessonSlug);

  // let headerTitle = 'Welcome to React';

  // if (currentLesson) {
  //   const lessonTitle = `Lesson ${String(currentLesson.id).padStart(2, '0')}: ${currentLesson.title}`;

  //   // Визначаємо назву підсторінки (якщо її немає, але це 9-й урок — за замовчуванням це "Home")
  //   let subPageTitle = '';
  //   if (subPageSlug) {
  //     subPageTitle = subPageSlug.charAt(0).toUpperCase() + subPageSlug.slice(1);
  //   } else if (currentLesson.id === 9) {
  //     subPageTitle = 'Home';
  //   }

  //   headerTitle = subPageTitle
  //     ? `${lessonTitle} - ${subPageTitle}`
  //     : lessonTitle;
  // }

  // Variant 2
  const matches = useMatches() as UIMatch<unknown, RouteHandle>[];

  // Збираємо значення 'crumb' з усіх активних рівнів роутингу
  const crumbs = matches
    .filter(match => match.handle?.crumb)
    .map(match => match.handle.crumb);

  // Вийде масив типу ['React Router library', 'About']
  // Шукаємо урок, щоб отримати його гарний номер (наприклад, "Lesson 09")
  const currentLesson = LESSONS.find(lesson =>
    matches.some(match => match.pathname.includes(lesson.path))
  );

  let headerTitle = 'Welcome to React';

  if (currentLesson && crumbs.length > 0) {
    const lessonNumber = `Lesson ${String(currentLesson.id).padStart(2, '0')}`;
    // З'єднуємо назву уроку та назву підсторінки
    headerTitle = `${lessonNumber}: ${crumbs.join(' - ')}`;
  }

  return (
    <div className={styles.header}>
      <h1>{headerTitle}</h1>
    </div>
  );
}
export default Header;
