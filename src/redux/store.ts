import { configureStore } from "@reduxjs/toolkit";
import baseEL from "./slice/baseEL";
import imageSlice from "./slice/imageSlice";

export const store = configureStore({
  reducer: {
    baseEl: baseEL,
    imageState: imageSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
