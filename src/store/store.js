import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasks.slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
