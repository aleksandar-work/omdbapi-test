import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieAPI";
import { singleApi } from "../services/singleApi";
import movieReducer from "./movies/movieReducer";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [singleApi.reducerPath]: singleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
