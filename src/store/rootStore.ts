import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './user'
// ...

export const rootStore = configureStore({
  reducer: {
    users: usersReducer.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch
