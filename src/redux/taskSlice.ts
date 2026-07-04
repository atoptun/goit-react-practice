import type { TaskInterface, TasksState } from '@/types';
import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';

const initialState: TasksState = {
  items: [
    { id: '0', text: 'Learn HTML and CSS', completed: true },
    { id: '1', text: 'Get good at JavaScript', completed: true },
    { id: '2', text: 'Master React', completed: false },
    { id: '3', text: 'Discover Redux', completed: false },
    { id: '4', text: 'Build amazing apps', completed: false },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<TaskInterface>) {
        state.items.push(action.payload);
      },
      prepare(text: string) {
        return {
          payload: {
            id: nanoid(),
            text: text,
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;

export const tasksReducer = taskSlice.reducer;
