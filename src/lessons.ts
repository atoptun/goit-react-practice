
interface Lesson {
  id: number;
  title: string;
  path: string;
}

const LESSONS_LIST = [
  {
    id: 1,
    title: 'Intro, Props, Collections',
  },
  {
    id: 2,
    title: 'Styles, CSS Modules, Classnames',
  },
  {
    id: 3,
    title: 'Events, State',
  },
  {
    id: 4,
    title: 'Life cycle',
  },
  {
    id: 5,
    title: 'Forms',
  },
  {
    id: 6,
    title: 'Formik library',
  },
  {
    id: 7,
    title: 'React-hooks: part 1',
  },
  {
    id: 8,
    title: 'React-hooks: part 2',
  },
  {
    id: 9,
    title: 'React Router library',
  },
  {
    id: 10,
    title: 'Separate code',
  },
  {
    id: 11,
    title: 'Redux. Base concepts',
  },
  {
    id: 12,
    title: 'Redux Toolkit',
  },
  {
    id: 13,
    title: 'Redux Async',
  },
  {
    id: 14,
    title: 'useReducer',
  },
];

export const LESSONS: Lesson[] = LESSONS_LIST.map((lesson) => ({
  ...lesson,
  path: getSlug(lesson.id, lesson.title),
}));

function getSlug (id: number, title: string): string {
  const lessonNumber = String(id).padStart(2, '0');

  const cleanedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  return `lesson-${lessonNumber}-${cleanedTitle}`;
};
