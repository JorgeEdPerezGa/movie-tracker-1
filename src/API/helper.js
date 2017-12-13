async function fetchMovies(){
    const fetchMoviesData = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=020247bf421cd580aa7ceee48b183e05')
    const moviesData = await fetchMoviesData.json();
    const movies = await moviesData.results;
    const movie = await fetchMovie(movies)
  return Promise.all(movie)

  }

  async function fetchMovie(movie) {
     const movies = await movie.map( movie => {
      let title = movie.title;
      let overview = movie.overview;
      let poster = movie.poster_path;
      let vote = movie.vote_average;
      return Object.assign({}, {title, poster, vote, overview})
    });

     return Promise.all(movies)
  }



  export default { fetchMovies };
