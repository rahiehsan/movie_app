import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import {APIKey} from "../../common/api/movieApiKey";

const Home = () => {

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Err :", err);
      });
      console.log("Response from API (Home.js) ",response);
    };

    fetchMovies()
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
        <MovieListing />
    </div>
  );
};

export default Home;
