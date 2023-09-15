import { createSlice } from "@reduxjs/toolkit";
import { fetchDataByGenre, fetchMovies, getGenres } from "./thunk";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.genresLoaded = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchDataByGenre.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export const netflixReducer = NetflixSlice.reducer;
