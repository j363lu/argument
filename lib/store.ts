import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import typeReducer from './typeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      page: pageReducer,
      type: typeReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']