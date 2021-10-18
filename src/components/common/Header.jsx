import React from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "../../store/movies/actions";

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="bg-green-300  py-5 ">
      <div className="flex flex-col md:flex-row justify-center h-20 max-w-screen-lg mx-auto md:justify-between items-center font-bold text-xl ">
        <h1 className="mb-2">My Movie DB</h1>
        <div className="">
          <input
            onChange={(e) => dispatch(setMovie(e.target.value))}
            className="rounded-sm w-48 px-3 "
            placeholder="search"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
