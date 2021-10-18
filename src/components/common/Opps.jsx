import React from "react";
import { Header } from ".";

function Opps() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="flex flex-col items-center mt-6 max-w-screen-lg h-96 max-h-96 mx-auto bg-white">
        <h1 className="mt-6 text-2xl font-semibold">
          Opps! something went wrong!
        </h1>
        <img className="h-72 w-72" src="/Exclamation.svg" alt="exclation" />
      </div>
    </div>
  );
}

export default Opps;
