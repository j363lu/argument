import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface MessagesState {
  value: string[]
}

// Define the initial state using that type
const initialState: MessagesState = {
  value: []
}

export const messagesSlice = createSlice({
  name: 'messages',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setMessages } = messagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.messages.value;

export default messagesSlice.reducer;