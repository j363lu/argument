import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const types = ["emotional", "narrative", "logicConsequential", "logicMoral", "antiConservative"];

// Define a type for the slice state
export interface TypeState {
  value: "emotional" | "narrative" | "logicConsequential" | "logicMoral" | "antiConservative"
}

// Define the initial state using that type
const initialState: TypeState = {
  value: "emotional"
}

export const typeSlice = createSlice({
  name: 'type',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setType: (state, action) => {
      if (types.includes(action.payload)) {
        state.value = action.payload;
      }
    }
  }
})

export const { setType } = typeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectType = (state: RootState) => state.type.value;

export default typeSlice.reducer;