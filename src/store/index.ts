import { configureStore } from "@reduxjs/toolkit";
import sharingSlice from "containers/Sharing/slice";
import notifierSlice from "core/Snackbar/slice";
import appSlice from "containers/App/slice";
import articleSlice from "containers/Article/slice";

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    sharing: sharingSlice.reducer,
    notifier: notifierSlice.reducer,
    app: appSlice.reducer,
    article: articleSlice.reducer
  }
})

export const dispatch = store.dispatch

export default store
