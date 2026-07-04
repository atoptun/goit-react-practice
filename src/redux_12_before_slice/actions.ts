import { createAction, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import type { FilterValue } from '@/types';

export const addTask = createAction('tasks/addTask', (text: string) => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

export const deleteTask = createAction<string>('tasks/deleteTask');

export const toggleCompleted = createAction<string>('tasks/toggleCompleted');

export const setStatusFilter = createAction<FilterValue>(
  'filters/setStatusFilter'
);
