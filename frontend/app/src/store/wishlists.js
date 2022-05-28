import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWishlists, addWishlists, findById } from "./wishlistsAPI";

export const fetchWishlistsAsync = createAsyncThunk(
  "wishlists/fetchWishlists",
  async () => {
    const response = await fetchWishlists();
    return response;
  }
);

export const fetchByIdtAsync = createAsyncThunk(
  "byId/fetchById",
  async (id) => {
    return await findById(id);
  }
);

export const addWishlistsAsync = createAsyncThunk(
  "addWishlists/addWishlists",
  async (payload) => {
    const response = await addWishlists(payload);
    return response;
  }
);

export const wishlistsSlice = createSlice({
  name: "wishlists",
  initialState: {
    value: [],
    loading: false,
    id: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlistsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchByIdtAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchByIdtAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload;
      })
      .addCase(addWishlistsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWishlistsAsync.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectIdWishlist = (state) => state.wishlists.id;
export const selectWishlists = (state) => state.wishlists.value;
export const selectStatusWishlists = (state) => state.wishlists.status;

export default wishlistsSlice.reducer;
