/** Example for base Redux. Lesson 11
 * There should have been createStore, combineReducers, applyMiddleware, compose, etc. here
 * But we are using configureStore from @reduxjs/toolkit which is a wrapper around createStore and combineReducers
 */

import { configureStore } from '@reduxjs/toolkit';
import { type AppState } from '@/types';

const initialState: AppState = {
  tasks: {
    items: [
      { id: '0', text: 'Learn HTML and CSS', completed: true },
      { id: '1', text: 'Get good at JavaScript', completed: true },
      { id: '2', text: 'Master React', completed: false },
      { id: '3', text: 'Discover Redux', completed: false },
      { id: '4', text: 'Build amazing apps', completed: false },
    ],
  },
  filters: {
    state: 'all',
  },
};

const rootReducer = (
  state: AppState = initialState,
  action: { type: string; payload: unknown }
) => {
  switch (action.type) {
    case 'tasks/addTask': {
      return {
        ...state,
        tasks: {
          items: [...state.tasks.items, action.payload],
        },
      };
    }

    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: {
          items: state.tasks.items.filter(task => task.id !== action.payload),
        },
      };

    case 'tasks/toggleCompleted':
      return {
        ...state,
        tasks: {
          items: state.tasks.items.map(task => {
            if (task.id !== action.payload) {
              return task;
            }
            return {
              ...task,
              completed: !task.completed,
            };
          }),
        },
      };

    case 'filters/setStatusFilter':
      return {
        ...state,
        filters: {
          status: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
