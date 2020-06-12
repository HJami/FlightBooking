import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Flights from './components/Flights/Flights';

class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      searchFlights: []
    }
    //console.log(state);
  }

  getFlights() {
    var data = require('./Data/MockedFlights.json');
    //console.log(data);
    return data;
  }
  
  searchBtnClick = () => {
    var data = this.getFlights();
    this.setState({searchFlights: data});
    console.log(data);
  }

  render = function () {
    return (
      <div className="App">
        <div className="App-body">
          <SearchBar searchBtnClick = {this.searchBtnClick}/>
          <Flights SearchData = {this.state.searchFlights}/>
        </div>
      </div>
    );
    }
}

export default App;
