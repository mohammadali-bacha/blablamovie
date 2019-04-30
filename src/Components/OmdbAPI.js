import React, { Component } from 'react'

export default class OmdbAPI extends Component{

  constructor(props) {
    super(props)
    this.state = {
      movies : [],
      movieId : "",
      movie: []
    }
    this.clickedTitle = this.clickedTitle.bind(this)
  }

  componentDidMount() {
    const moviesAPI = "http://www.omdbapi.com/?s=avengers&apikey=de3a9f86";
    fetch(moviesAPI).then(data => data.json())
      .then(json =>
      this.setState({
        movies : json.Search
      })
    )
  }

  clickedTitle(imdbID) {
    console.log(this.state.movieId)
    let moviePage =
      "http://www.omdbapi.com/?i=" + imdbID + "&apikey=de3a9f86";
    fetch(moviePage)
    .then(movieData => movieData.json())
    .then(json =>
    this.setState({
      movie : json,
      movieId : imdbID
    }))
    console.log(this.state)
  }

  render() {
    return(
      <div>
      <DisplayMovie movie={this.state.movie}/>

      <div className="container">
        <MovieList movies={this.state.movies} clickedTitleCallback={this.clickedTitle}/>
      </div>
      </div>
    )
  }
}

export class MovieList extends Component{
  constructor(props) {
    super(props)
    this.titleClicked = this.titleClicked.bind(this)
  }

  titleClicked(imdbID) {
    this.props.clickedTitleCallback(imdbID)
  }

  render() {

    let movieList = this.props.movies.map(function(movie,index) {
      let imdbID = movie.imdbID
      return  <div className="movies_holder" key={index+Date.now()} onClick={(singleMovie) => this.titleClicked(imdbID)}>
                <li><img className="styleImage" src={movie.Poster}/></li>
              </div>
    }.bind(this))

    return(
      <div>
        {movieList}
      </div>
    )
  }
}

export class DisplayMovie extends Component {
  render() {
    return(
      <div className="movie_container">
        <div><img src={this.props.movie.Poster}/></div>
        <div className="movie_info_container">
          <div className="style_movieTitle">{this.props.movie.Title}</div>
          <div className="style_movieGenre">{this.props.movie.Genre}</div>
          <div className="style_moviePlot">{this.props.movie.Plot}</div>
        </div>
      </div>
    )
  }
}
