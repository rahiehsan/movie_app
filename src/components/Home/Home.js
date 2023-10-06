import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import {APIKey} from "../../common/api/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Err :", err);
      });
      dispatch(addMovies(response.data))
      console.log("Response from API (Home.js) ",response.data);
    };

    fetchMovies()
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
        <MovieListing />
    </div>
  );
};

export default Home;
