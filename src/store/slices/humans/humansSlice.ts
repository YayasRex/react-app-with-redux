import { createSlice } from '@reduxjs/toolkit';
import { ListState, humans } from '../../../utils/consts';
import reducers from './reducers';

const initialState: ListState = {
  list: humans
}

export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers,
})
// Action creators are generated for each case reducer function

export const { updatePoints } = humansSlice.actions