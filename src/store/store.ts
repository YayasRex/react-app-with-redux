import { configureStore } from '@reduxjs/toolkit'
import { amphibiansSlice } from './slices/amphibians';

export const store = configureStore({
  reducer: {
    amphibians: amphibiansSlice.reducer,
    // humans: ,
    // pets:
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch