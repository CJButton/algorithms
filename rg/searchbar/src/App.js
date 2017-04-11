

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchbar: "",
      db: Object.getOwnPropertyNames(window),
      results: []
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchbar: e.target.value
    });

    this.filterList();

  }

  filterList = () => {
    let results = [];

    this.state.db.forEach((el) => {

      if (el.toLowerCase().slice(0, this.state.searchbar.length) === this.state.searchbar) {

      }
    });
    console.log(results);
    // this.setState({
    //   results : results
    // });
  }


  render() {

    return (
      <div className="App">
        <input type="text" value={this.state.searchbar} onChange={this.handleSearch.bind(this)}/>

      </div>
    );
  }
}

export default App;
