import React from "react";
import { Table } from "reactstrap";

export default class List extends React.Component {
   constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  searchTitle(term) {
    fetch(`http://www.omdbapi.com/?s=${term}&apikey=de3a9f86`)
      .then(r => r.json())
      .then(data => {
        this.setState({ movies: data.Search });
      })
      .catch(err => console.log("Error:", err));
  }

//   render() {
//     return (
//       <div className="App">
//         <MovieSearch
//           searchTitle={this.searchTitle.bind(this)}
//         />
//         <MovieList
//           movies={this.state.movies}
//         />
//       </div>
//     );
//   }
// }
  render() {

    return (
      (
        <div className="App">
          {/* <MovieSearch */}
          searchTitle={this.searchTitle.bind(this)}
          // />
          {/* <MovieList */}
          movies={this.state.movies}
          // />
        </div>
      ),
      (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.state.movies}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      )
    );
  }
}
