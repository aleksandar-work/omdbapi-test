import { createReducer } from "@reduxjs/toolkit";

const movieReducer = createReducer({ path: "", movieSearch: "" }, (builder) => {
  builder
    .addCase("SET_PATH", (state, action) => {
      return { ...state, path: action.payload };
    })
    .addCase("SET_MOVIE", (state, action) => {
      return { ...state, movieSearch: action.payload };
    });
});
export default movieReducer;
