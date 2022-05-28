import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./booksAPI";

export const fetchBooksAsync = createAsyncThunk(
  "books/fetchBooks",
  async (keyword) => {
    const response = await fetchBooks(keyword);
    return response.items;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state, action) => {
        state.status = "loading";
        console.log(state.status);
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.status = false;
        console.log(state.status);
        console.log(action.payload);
        state.value = action.payload;
      });
  },
});

export const selectBooks = (state) => state.books.value;
export const selectStatusBooks = (state) => state.books.status;

export default booksSlice.reducer;
