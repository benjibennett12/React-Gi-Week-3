import { useState } from "react";

const Movie = (props) => {
  return (
    <div className="movies">
      <img src={props.poster_path} alt="" width="403px" height="648px" />
      <div className="product-details">
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default function Medium() {
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("");
  const apiKey = "aafdb1771e07191f426cf18fde214076";

  async function getMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&api_key=${apiKey}`
      );
      const data = await res.json();
      setMovies(data.results);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearch = () => {
    if (searchedMovie !== "") {
      getMovies();
    }
  };

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" onChange={(e) => setSearchedMovie(e.target.value)} />

      <button onClick={handleSearch}>Search</button>
      
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        ))
      ) : (
        <p>No movies found</p>
      )}

    </div>
  );
}