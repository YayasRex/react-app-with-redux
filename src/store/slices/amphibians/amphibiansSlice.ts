import { createSlice } from '@reduxjs/toolkit';
import { IListState, amphibians } from '../../../utils/consts';

const initialState: IListState = {
  list: amphibians
}

export const amphibiansSlice = createSlice({
  name: 'amphibians',
  initialState,
  reducers: {
    updatePoints: (state, action ) => {
      console.log(state.list)
      state.list.map((curr) => {
        if (curr.id === action.payload) curr.points += 1;
        return curr;
      });
    },
  },
})
// Action creators are generated for each case reducer function

export const { updatePoints } = amphibiansSlice.actions