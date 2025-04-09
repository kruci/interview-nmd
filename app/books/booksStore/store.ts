import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { UploadFile } from "antd";

export type Book = {
  //id: string; // We will use title as ID for simplicity
  title: string;
  author?: string;
  description?: string;
  picture?: UploadFile;
};

type BookState = {
  books: Book[];
};

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push({ ...action.payload });
    },
    modifyBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(
        (book) => book.title === action.payload.title
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.title !== action.payload);
    },
  },
});

export const { addBook, modifyBook, deleteBook } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
