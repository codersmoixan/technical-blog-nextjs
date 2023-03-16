import { configureStore } from "@reduxjs/toolkit";
import sharingSlice from "containers/Sharing/slice";
import notifierSlice from "core/Snackbar/slice";
import appSlice from "containers/App/slice";
import articlesSlice from "containers/Articles/slice";

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    sharing: sharingSlice.reducer,
    notifier: notifierSlice.reducer,
    app: appSlice.reducer,
    articles: articlesSlice.reducer
  }
})

export const dispatch = store.dispatch

export default store
