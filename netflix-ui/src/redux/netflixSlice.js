import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genresloaded: false,
  genres: [],
};

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {},
});

export const netflixReducer = NetflixSlice.reducer;
