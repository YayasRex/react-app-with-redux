import { createSlice } from '@reduxjs/toolkit';

export const humansSlice = createSlice({
  name: 'humans',
  initialState: {
    value: null
  },
  reducers: {
    consoleAction: (state, /* action */ ) => {
      console.log(state.value)
    },
  },
})
// Action creators are generated for each case reducer function

export const { consoleAction } = humansSlice.actions