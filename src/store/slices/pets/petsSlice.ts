import { createSlice } from '@reduxjs/toolkit';

export const petsSlice = createSlice({
  name: 'pets',
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

export const { consoleAction } = petsSlice.actions