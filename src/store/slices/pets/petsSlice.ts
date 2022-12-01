import { createSlice } from '@reduxjs/toolkit';
import { ListState, pets } from '../../../utils/consts';
import reducers from './reducers';

const initialState: ListState = {
  list: pets
}

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers,
})
// Action creators are generated for each case reducer function

export const { updatePoints } = petsSlice.actions