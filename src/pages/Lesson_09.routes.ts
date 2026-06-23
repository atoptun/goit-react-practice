import Mission from '@/components/Lesson_09/Mission/Mission';
import Team from '@/components/Lesson_09/Team/Team';
import Reviews from '@/components/Lesson_09/Reviews/Reviews';
import { lazy } from 'react';

// Компоненти завантажуються ліниво (код сплітиться на окремі чанки)
const Lesson_09 = lazy(() => import('./Lesson_09'));
const Home = lazy(() => import('@/components/Lesson_09/pages/Home'));
const About = lazy(() => import('@/components/Lesson_09/pages/About'));
const Products = lazy(() => import('@/components/Lesson_09/pages/Products'));
const ProductDetails = lazy(() => import('@/components/Lesson_09/pages/ProductDetails'));
// About subpages


export const routes = {
  Component: Lesson_09,
  children: [
    { index: true, Component: Home, handle: { crumb: 'Home' } },
    {
      path: 'about',
      Component: About,
      handle: { crumb: 'About' },
      children: [
        { path: 'mission', Component: Mission, handle: { crumb: 'Mission' } },
        { path: 'team', Component: Team, handle: { crumb: 'Team' } },
        { path: 'reviews', Component: Reviews, handle: { crumb: 'Reviews' } },
      ],
    },
    { path: 'products', Component: Products, handle: { crumb: 'Products' } },
    {
      path: 'products/:productId',
      Component: ProductDetails,
      handle: { crumb: 'Product' },
    },
  ],
};
