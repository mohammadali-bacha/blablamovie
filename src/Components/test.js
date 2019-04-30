const Request = window.superagent;

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    this.search();
  }

  search(query = "") {
    console.log(query);
    let url = `http://www.omdbapi.com/?s=${query}&y=&r=json&plot=short`;
    let that = this;
    console.log(url);
    Request.get(url).end(function(err, res) {
      that.setState({
        movies: res.body.Search
      });
    });
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {
    var movies = this.state.movies.map(function(movie) {
      return <li>{movie.Title}</li>;
    });

    return (
      <div>
        <input
          className="app_input"
          ref="query"
          type="text"
          onChange={e => this.updateSearch()}
        />
        <ul>{movies}</ul>
      </div>
    );
  }
}

React.render(<Test />, document.getElementById("app"));
