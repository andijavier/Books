import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books";
import wishlistsReducer from "./wishlists";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    wishlists: wishlistsReducer,
  },
});
