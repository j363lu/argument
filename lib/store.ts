import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import typeReducer from './typeSlice';
import timeReducer from './timeSlice';
import idReducer from './idSlice';
import messagesReducer from './messagesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      page: pageReducer,
      type: typeReducer,
      time: timeReducer,
      id: idReducer,
      messages: messagesReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']