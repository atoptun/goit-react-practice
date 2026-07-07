import axios from 'axios';
// import {
//   fetchInProgress,
//   fetchSuccess,
//   fetchError,
// } from "./remoteTaskSlice";
import {
  createAsyncThunk,
  // type Dispatch
} from '@reduxjs/toolkit';
import type { RemoteTaskInterface } from '@/types';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchRemoteTasks = createAsyncThunk<
  RemoteTaskInterface[],
  void,
  { rejectValue: string }
>('remoteTasks/fetchTasks', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error: Error | unknown) {
    return thunkAPI.rejectWithValue(
      (error as Error).message || 'Something went wrong'
    );
  }
});

export const addRemoteTask = createAsyncThunk(
  'remoteTasks/addTask',
  async (text: string, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (error: Error | unknown) {
      return thunkAPI.rejectWithValue(
        (error as Error).message || 'Something went wrong'
      );
    }
  }
);

export const deleteRemoteTask = createAsyncThunk(
  'remoteTasks/deleteTask',
  async (taskId: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error: Error | unknown) {
      return thunkAPI.rejectWithValue(
        (error as Error).message || 'Something went wrong'
      );
    }
  }
);

export const toggleRemoteCompleted = createAsyncThunk(
  'remoteTasks/toggleCompleted',
  async (task: RemoteTaskInterface, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (error: Error | unknown) {
      return thunkAPI.rejectWithValue(
        (error as Error).message || 'Something went wrong'
      );
    }
  }
);

// export const fetchRemoteTasks = () => async (dispatch: Dispatch) => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchInProgress());
//     // HTTP-запит
//     const response = await axios.get("/tasks");
//     // Обробка даних
//     dispatch(fetchSuccess(response.data));
//   } catch (e: Error | unknown) {
//     // Обробка помилки
//     dispatch(fetchError(e instanceof Error ? e.message : "An unknown error occurred"));
//   }
// };
