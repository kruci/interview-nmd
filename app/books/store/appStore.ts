import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./booksSlice";
import { bookSearchReducer } from "./bookSearchSlice";

export const appStore = configureStore({
  reducer: {
    books: bookReducer,
    bookSearch: bookSearchReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type StoreDispatch = typeof appStore.dispatch;
