import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieTrailerVideo();
  }, []);
  const getMovieTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const trailerVideo = filteredData[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
};

export default useTrailerVideo;
