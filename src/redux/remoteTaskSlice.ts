import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRemoteTasks,
  addRemoteTask,
  deleteRemoteTask,
  toggleRemoteCompleted
} from './operations';
import type { RemoteTaskInterface } from '@/types';

interface RemoteTasksState {
  items: RemoteTaskInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RemoteTasksState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: RemoteTasksState) => {
  state.isLoading = true;
};

const handleRejected = (state: RemoteTasksState, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const remoteTasksSlice = createSlice({
  name: 'remoteTasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRemoteTasks.pending, handlePending)
      .addCase(fetchRemoteTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRemoteTasks.rejected, handleRejected)
      // add remote task
      .addCase(addRemoteTask.pending, handlePending)
      .addCase(addRemoteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addRemoteTask.rejected, handleRejected)
      // delete remote task
      .addCase(deleteRemoteTask.pending, handlePending)
      .addCase(deleteRemoteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(task => task.id !== action.payload.id);
      })
      .addCase(deleteRemoteTask.rejected, handleRejected)
      // toggle remote task completed
      .addCase(toggleRemoteCompleted.pending, handlePending)
      .addCase(toggleRemoteCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(task =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(toggleRemoteCompleted.rejected, handleRejected);

  },
});

export default remoteTasksSlice.reducer;

// const remoteTasksSlice = createSlice({
//   name: 'remoteTasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchInProgress, fetchSuccess, fetchError } =
//   remoteTasksSlice.actions;

// export const remoteTasksReducer = remoteTasksSlice.reducer;
