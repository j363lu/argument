import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      page: pageReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']