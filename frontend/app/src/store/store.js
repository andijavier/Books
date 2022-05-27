import { configureStore } from "@reduxjs/toolkit";
import recentReducer from "./recent";
import booksReducer from "./books";

export const store = configureStore({
  reducer: {
    recent: recentReducer,
    books: booksReducer,
  },
});
