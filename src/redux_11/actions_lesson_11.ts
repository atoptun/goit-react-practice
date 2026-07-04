/** Example for base Redux. Lesson 11 */

import type { FilterValue } from '@/types';
import { nanoid } from 'nanoid';

export const addTask = (text: string) => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = (taskId: string) => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = (taskId: string) => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = (value: FilterValue) => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
