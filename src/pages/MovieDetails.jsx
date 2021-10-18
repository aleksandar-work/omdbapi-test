import React from "react";
import { Link } from "react-router-dom";
import { useGetSingleMovieQuery } from "../services/singleApi";
import Opps from "../components/common/Opps";
import { useSelector } from "react-redux";
function MovieDetails(props) {
  const path = useSelector((state) => state.movie.path);
  const { data, isLoading, error } = useGetSingleMovieQuery(path);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <Opps />;
  return (
    <div className="overflow-x-hidden">
      <div className="bg-green-300  py-5 ">
        <div className="flex flex-col md:flex-row justify-center h-20 max-w-screen-lg mx-auto md:justify-between items-center font-bold text-xl ">
          <h1 className="mb-2">My Movie DB</h1>
        </div>
      </div>
      <div className="my-4 flex justify-center xl:justify-start xl:max-w-screen-lg mx-auto">
        <Link to="/">
          <button
            onClick={() => console.log(data)}
            className="bg-green-200 w-60  hover:bg-green-300 px-5 py-3"
          >
            Back to Results
          </button>
        </Link>
      </div>

      <div className="bg-white grid justify-items-center xl:justify-items-start xl:grid-cols-2 max-w-screen-lg xl:mx-auto xl:place-items-center">
        <img className="" src={data.Poster} alt={data.title} />
        <div className="flex flex-col xl:items-start items-center mt-4 xl:mt-0">
          <div className="xl:flex  justify-between items-start ">
            <div className="w-60 xl:w-auto">
              <h1 className="font-semibold text-2xl  ">
                {data.Title} - ({data.Year})
              </h1>
              <h1 className="text-sm">
                {data.Rated}| {data.Runtime} | {data.Genre} | {data.Released}
              </h1>
            </div>

            <h1 className="font-semibold text-center text-2xl mt-4">
              {data.Ratings[0].Value}
            </h1>
          </div>
          <h1 className="font-semibold my-2">Plot</h1>
          <p className="w-60">{data.Plot}</p>
          <h1 className="font-semibold my-2">Directors</h1>
          <p className="w-60">{data.Director}</p>
          <h1 className="font-semibold my-2">Actors</h1>
          <p className="w-60">{data.Actors}</p>
          <h1 className="font-semibold my-2">IMDB Id</h1>
          <p className="w-60">{data.imdbID}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

// {Title: 'Toy Story', Year: '1995', Rated: 'G', Released: '22 Nov 1995', Runtime: '81 min', …}
// Actors: "Tom Hanks, Tim Allen, Don Rickles"
// Awards: "Won 1 Oscar. 27 wins & 23 nominations total"
// BoxOffice: "$223,225,679"
// Country: "United States"
// DVD: "23 Mar 2010"
// Director: "John Lasseter"
// Genre: "Animation, Adventure, Comedy"
// Language: "English"
// Metascore: "95"
// Plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
// Poster: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
// Production: "Walt Disney Pictures, Pixar Animation Studios"
// Rated: "G"
// Ratings: Array(3)
// 0: {Source: 'Internet Movie Database', Value: '8.3/10'}
// 1: {Source: 'Rotten Tomatoes', Value: '100%'}
// 2: {Source: 'Metacritic', Value: '95/100'}
// length: 3
// [[Prototype]]: Array(0)
// Released: "22 Nov 1995"
// Response: "True"
// Runtime: "81 min"
// Title: "Toy Story"
// Type: "movie"
// Website: "N/A"
// Writer: "John Lasseter, Pete Docter, Andrew Stanton"
// Year: "1995"
// imdbID: "tt0114709"
// imdbRating: "8.3"
