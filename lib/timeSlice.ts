import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { format, utcToZonedTime } from 'date-fns-tz';

// Given a time generated from Date.now(), returns a string in the format 'YYYY-MM-DD HH:MM:SS' in toronto time
export const torontoTime = (time: string) => {
  const date = new Date(Number.parseInt(time));

  // Specify the time zone for Ontario, Eastern Time
  const timeZone = 'America/Toronto';

  // Convert UTC date to the zoned time
  const zonedDate = utcToZonedTime(date, timeZone);

  // Format the zoned date to the desired string format
  const pattern = 'yyyy-MM-dd HH:mm:ss';
  const result = format(zonedDate, pattern, { timeZone });

  return result;
}

// Define a type for the slice state
export interface TimeState {
  startTime: string
}

// Define the initial state using that type
const initialState: TimeState = {
  startTime: Date.now().toString()
}

export const timeSlice = createSlice({
  name: 'time',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateStartTime: (state) => {
      state.startTime = torontoTime(Date.now().toString());
    },
  }
})

export const { updateStartTime } = timeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStartTime = (state: RootState) => state.time.startTime;

export default timeSlice.reducer;