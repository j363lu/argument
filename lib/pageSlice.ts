import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface PageState {
  value: number
}

// Define the initial state using that type
const initialState: PageState = {
  value: 0
}

export const pageSlice = createSlice({
  name: 'page',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.value += 1;
    }
  }
})

export const { incrementPage } = pageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.page.value;

export default pageSlice.reducer;