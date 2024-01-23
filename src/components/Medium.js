import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div className="movies">
        <img src={this.props.poster_path} alt="" width="403px" height="648px" />
        <div className="product-details">
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchedMovie: "",
    };
    this.apiKey = "aafdb1771e07191f426cf18fde214076";
  }

  getMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${this.state.searchedMovie}&api_key=${this.apiKey}`
      );
      const data = await res.json();
      this.setState({ movies: data.results });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  handleSearch = () => {
    if (this.state.searchedMovie !== "") {
      this.getMovies();
    }
  };

  render() {
    return (
      <div className="App">
        <label>Search</label>
        <input
          type="text"
          onChange={(e) => this.setState({ searchedMovie: e.target.value })}
        />

        <button onClick={this.handleSearch}>Search</button>

        {this.state.movies.length > 0 ? (
          this.state.movies.map((movie) => (
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
}

export default Medium;
