import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const singleApi = createApi({
  reducerPath: "singleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getSingleMovie: builder.query({
      query: (imdbId) => `?i=${imdbId}&apikey=efd2b454`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSingleMovieQuery } = singleApi;
