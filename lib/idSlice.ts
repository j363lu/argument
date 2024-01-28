import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "@reduxjs/toolkit";
import type { RootState } from './store';

// Define a type for the slice state
export interface IdState {
  id: string,
  completionCode: string
}

// Define the initial state using that type
const initialState: IdState = {
  id: Date.now().toString(),
  completionCode: nanoid()
}

export const idSlice = createSlice({
  name: 'id',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {}
})

// Other code such as selectors can use the imported `RootState` type
export const selectId = (state: RootState) => state.id.id;
export const selectCompletionCode = (state: RootState) => state.id.completionCode;

export default idSlice.reducer;