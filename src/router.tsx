import { lazy, type ComponentType } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LESSONS } from './lessons';
import NotFound from '@/pages/NotFound';

const routeConfigs = import.meta.glob('./pages/Lesson_*.routes.ts', {
  eager: true,
});

const lessonRoutes: RouteObject[] = LESSONS.map(lesson => {
  const lessonNumber = String(lesson.id).padStart(2, '0');

  const routeKey = `./pages/Lesson_${lessonNumber}.routes.ts`;

  if (routeKey in routeConfigs) {
    const module = routeConfigs[routeKey] as { routes: RouteObject };
    return {
      path: lesson.path,
      ...module.routes,
    };
  }

  // const DynamicLessonComponent = lazy(() =>
  //   import(`./pages/Lesson_${lessonNumber}`).then(
  //     (module) => ({ default: module.default as ComponentType<object> })
  //   )
  // );
  const DynamicLessonComponent = lazy<ComponentType<object>>(
    () => import(`./pages/Lesson_${lessonNumber}`)
  );

  return {
    path: lesson.path,
    element: <DynamicLessonComponent />,
  };
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <div>Select a lesson</div> },
      ...lessonRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
