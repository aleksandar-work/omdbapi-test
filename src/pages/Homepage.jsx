import React from "react";
import { MovieCard } from "../components/ui";
import { Header } from "../components/common";
import { useGetMoviesQuery } from "../services/movieAPI";
import { useSelector } from "react-redux";

function Homepage() {
  const { data, error, isLoading } = useGetMoviesQuery();
  const [search, setSearch] = React.useState([]);
  const query = useSelector((state) => state.movie.movieSearch);
  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };
  React.useEffect(() => {
    if (query.length > 0) setSearch(filterItems(data, query));
  }, [data, query]);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Opps! Something went wrong</h1>;
  return (
    <div className="bg-gray-200 max-w-screen-xl mx-auto">
      <Header />

      <h1 className="text-center font-semibold my-5">All movies</h1>
      <div className="grid grid-cols-1 bg-white p-6 gap-5 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {query.length === 0 ? (
          data.map((item) => {
            return (
              <MovieCard
                id={item.id}
                key={item.id}
                src={item.poster}
                title={item.title}
                imdbId={item.imdbId}
                type={item.type}
              />
            );
          })
        ) : search.length > 0 ? (
          search.map((item) => {
            return (
              <MovieCard
                id={item.id}
                key={item.id}
                src={item.poster}
                title={item.title}
                imdbId={item.imdbId}
              />
            );
          })
        ) : (
          <div>No search results</div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
