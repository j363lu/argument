import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const topics = ["freeTrade", "kidneyMarkets"];
export const politicalPreference = ["democrat", "republican"]
export const types = ["value", "reason", "control"];

// Define a type for the slice state
export interface TypeState {
  topic: "freeTrade" | "kidneyMarkets",
  politicalPreference: "democrat" | "republican",
  type: "value" | "reason" | "control"
}

// Define the initial state using that type
const initialState: TypeState = {
  topic: "freeTrade",
  politicalPreference: "democrat",
  type: "value"
}

export const typeSlice = createSlice({
  name: 'type',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTopic: (state, action) => {
      if (topics.includes(action.payload)) {
        state.topic = action.payload;
      }
    },

    setPoliticalPreference: (state, action) => {
      if (politicalPreference.includes(action.payload)) {
        state.politicalPreference = action.payload;
      }
    },    

    setType: (state, action) => {
      if (types.includes(action.payload)) {
        state.type = action.payload;
      }
    }
  }
})

export const { setTopic, setPoliticalPreference, setType } = typeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTopic = (state: RootState) => state.type.topic;
export const selectPoliticalPreference = (state: RootState) => state.type.politicalPreference;
export const selectType = (state: RootState) => state.type.type;

export default typeSlice.reducer;