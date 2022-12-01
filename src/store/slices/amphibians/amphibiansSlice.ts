import { createSlice } from '@reduxjs/toolkit';
import { ListState, amphibians } from '../../../utils/consts';
import reducers from './reducers';

const initialState: ListState = {
  list: amphibians,
}

export const amphibiansSlice = createSlice({
  name: 'amphibians',
  initialState,
  reducers
})

export const { updatePoints } = amphibiansSlice.actions