import { createAsyncThunk } from "@reduxjs/toolkit";
import { TMBD_BASE_URL, API_KEY } from "../utils/constants";
import axios from "axios";

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  try {
    const {
      data: { genres },
    } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres;
  } catch (error) {
    console.log(error);
  }
});

const createArrayFromRawData = async (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
    }
  });
};

const getRawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
    return moviesArray;
  }
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    try {
      const {
        netflix: { genres },
      } = thunkApi.getState();
      return getRawData(
        `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
        genres,
        true
      );
    } catch (error) {
      console.log(error);
    }
  }
);
