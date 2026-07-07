import {
  // combineReducers,
  configureStore
} from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';
import remoteTasksReducer from './remoteTaskSlice';
// localStorage
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filtersReducer,
// })

const rootReducer = {
  tasks: tasksReducer,
  filters: filtersReducer,
  remoteTasks: remoteTasksReducer,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
