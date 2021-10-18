import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPath } from "../../store/movies/actions";
function MovieCard(props) {
  const dispatch = useDispatch();
  return (
    <div className="h-auto w-60 sm:w-52 tooltip">
      <span className="tooltiptext">{props.title}</span>
      <span className="tooltiptext">{props.title}</span>
      <Link to={`/${props.id}`}>
        <img
          onClick={() => dispatch(setPath(props.imdbId))}
          alt={props.title}
          src={props.src}
        />
      </Link>
      <h1 className="text-center">{props.title}</h1>
    </div>
  );
}

export default MovieCard;
