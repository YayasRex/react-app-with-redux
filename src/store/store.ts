import { configureStore } from '@reduxjs/toolkit'
import { amphibiansSlice } from './slices/amphibians';
import { humansSlice } from './slices/humans';
import { petsSlice } from './slices/pets';

export const store = configureStore({
  reducer: {
    amphibians: amphibiansSlice.reducer,
    humans: humansSlice.reducer,
    pets: petsSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch