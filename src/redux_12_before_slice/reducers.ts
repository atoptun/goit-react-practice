import { statusFilters } from './constants';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';
import type { FilterValue, TaskInterface } from '@/types';
import { createReducer } from '@reduxjs/toolkit';

const tasksInitialState: TaskInterface[] = [
  { id: '0', text: 'Learn HTML and CSS', completed: true },
  { id: '1', text: 'Get good at JavaScript', completed: true },
  { id: '2', text: 'Master React', completed: false },
  { id: '3', text: 'Discover Redux', completed: false },
  { id: '4', text: 'Build amazing apps', completed: false },
];

// bulder + Immer (under the hood) implementation of tasksReducer

export const tasksReducer = createReducer(tasksInitialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      state.push(action.payload);

      /** Зміна чи повернення
       * Один із підводних каменів бібліотеки Immer полягає в тому, що в
       * коді одного редюсера можна лише або мутувати стан, або повернути
       * оновлений, але не те й інше водночас.
       */

      // ❌ Так робити не можна, буде згенеровано виняток
      // state.push(action.payload);
      // return state.map(value => value * 2);
    })
    .addCase(deleteTask, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);

      /**
       * Зміна або оновлення
       * Іноді код іммутабельного оновлення стану лаконічніший, ніж його
       * альтернатива, що «змінює». Наприклад, у редюсері обробки екшену
       * видалення завдання. У такому разі необхідно обов'язково повернути
       * новий стан.
       */
      // OR - !! return is requered for immutable implementation
      // return state.filter(task => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    });
});

// ========

// bulder + immutable implementation of tasksReducer

// export const tasksReducer = createReducer<TaskInterface[]>(
//   tasksInitialState,
//   builder => {
//     builder
//       .addCase(addTask, (state, action) => {
//         return [...state, action.payload];
//       })
//       .addCase(deleteTask, (state, action) => {
//         return state.filter(task => task.id !== action.payload);
//       })
//       .addCase(toggleCompleted, (state, action) => {
//         return state.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         });
//       });
//   }
// );

// ========

// switch case implementation of tasksReducer

// import type { UnknownAction } from '@reduxjs/toolkit/react';

// export const tasksReducer = (
//   state: TaskInterface[] = tasksInitialState,
//   action: UnknownAction
// ) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

const filtersInitialState: { status: FilterValue } = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer<{ status: FilterValue }>(
  filtersInitialState,
  builder => {
    builder.addCase(setStatusFilter, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      state.status = action.payload;
    });
  }
);

// export const filtersReducer = createReducer<{ status: FilterType }>(
//   filtersInitialState,
//   builder => {
//     builder.addCase(setStatusFilter, (state, action) => {
//       state.status = action.payload;
//     });
//   }
// );

// export const filtersReducer = (
//   state: { status: FilterType } = filtersInitialState,
//   action: UnknownAction
// ) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
