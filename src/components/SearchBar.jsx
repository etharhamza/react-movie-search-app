import { useState } from "react";

export default function SearchBar({ setMovies }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const res = await fetch(`${apiUrl}?s=${query}&apikey=${apiKey}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
