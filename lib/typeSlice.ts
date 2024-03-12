import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const types = ["emotional", "narrative", "logicConsequential", "logicMoral", "control"];

// Define a type for the slice state
export interface TypeState {
  value: "emotional" | "narrative" | "logicConsequential" | "logicMoral" | "control",
  part2: "emotional" | "narrative" | "logicConsequential" | "logicMoral" | "control",
}

// Define the initial state using that type
const initialState: TypeState = {
  value: "emotional",
  part2: "emotional"
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
    },

    setPart2Type: (state, action) => {
      if (types.includes(action.payload)) {
        state.part2 = action.payload;
      }
    }
  }
})

export const { setType, setPart2Type } = typeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectType = (state: RootState) => state.type.value;
export const selectPart2Type = (state: RootState) => state.type.part2;

export default typeSlice.reducer;