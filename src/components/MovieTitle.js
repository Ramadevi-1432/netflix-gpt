import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-3xl py-4 font-semibold">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="py-4">
        <button className="px-8 py-2 rounded-md mr-4 bg-white hover:bg-opacity-70 text-black">
          <div className="flex items-center">
            <FaPlay className="mr-1 mt-1" />
            <span className="font-semibold">Play</span>
          </div>
        </button>
        <button className="px-8 py-2 rounded-md  bg-neutral-600 hover:bg-opacity-70">
          <div className="flex items-center">
            <AiOutlineInfoCircle className="mr-1 mt-1" />
            <span className="font-semibold">More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
