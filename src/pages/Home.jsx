import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar setMovies={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
}
