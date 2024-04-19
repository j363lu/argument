import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface PageState {
  value: number,
  part2: number,
  part3: number,
  part4: number
}

// Define the initial state using that type
const initialState: PageState = {
  value: 0,
  part2: 0,
  part3: 0,
  part4: 0
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
    },

    incrementPart3Page: (state) => {
      state.part3 += 1;
    },    

    incrementPart4Page: (state) => {
      state.part4 += 1;
    },    
  }
})

export const { incrementPage, incrementPart2Page, incrementPart3Page, incrementPart4Page } = pageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.page.value;
export const selectPart2Page = (state: RootState) => state.page.part2;
export const selectPart3Page = (state: RootState) => state.page.part3;
export const selectPart4Page = (state: RootState) => state.page.part4;

export default pageSlice.reducer;