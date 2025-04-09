import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

const bookSearchSlice = createSlice({
  name: "bookSearchSlice",
  initialState,
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { updateSearchValue } = bookSearchSlice.actions;

export const bookSearchReducer = bookSearchSlice.reducer;
