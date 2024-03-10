import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface PageState {
  value: number,
  part2: number
}

// Define the initial state using that type
const initialState: PageState = {
  value: 0,
  part2: 0
}

export const pageSlice = createSlice({
  name: 'page',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.value += 1;
    },

    incrementPart2Page: (state) => {
      state.part2 += 1;
    }
  }
})

export const { incrementPage, incrementPart2Page } = pageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.page.value;
export const selectPart2Page = (state: RootState) => state.page.part2;

export default pageSlice.reducer;