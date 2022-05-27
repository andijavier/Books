import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecent } from "./recentAPI";

export const fetchRecentAsync = createAsyncThunk(
  "recent/fetchRecent",
  async () => {
    const response = await fetchRecent();
    return response;
  }
);

export const recentSlice = createSlice({
  name: "recent",
  initialState: {
    value: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecentAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      });
  },
});

export const selectRecents = (state) => state.recent.value;
export const selectStatusRecent = (state) => state.recent.status;

export default recentSlice.reducer;
