
import './App.css';
import React, { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";
import { ImSearch } from "react-icons/im";

// const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=678fd0a4";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=678fd0a4&s=${title}`);
    const data = await response.json();
    // console.log(data)
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("taj");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <div className="searchIcon" onClick={() => searchMovie(searchTerm)}>
          <ImSearch />
        </div>
      </div>
      
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};


export default App;
