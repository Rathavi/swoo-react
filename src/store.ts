import { configureStore } from '@reduxjs/toolkit';
import countReducer from './features/countSlice';

export const store = configureStore({
  reducer: {
    count: countReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;