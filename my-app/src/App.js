import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Flights from './components/Flights/Flights';
import Passengers from './components/Passengers/Passengers'

class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      searchFlights: [],
      flightSelected: false,
      adultCount: 0,
      childenCount: 0
    }
    //console.log(state);
  }

  getFlights() {
    var data = require('./Data/MockedFlights.json');
    //console.log(data);
    return data;
  }
  
  searchBtnClick = (obj) => {
    var data = this.getFlights();
    this.setState({searchFlights: data, adultCount: obj.adultCount, childrenCount: obj.childrenCount});
  }

  reserveClicked = () => {
    this.setState({flightSelected: true});
  }

  render = function () {
    return (
      <div className="App">
        <div className="App-body">
          {
            !this.state.flightSelected ?
          <SearchBar searchBtnClick = {this.searchBtnClick}/>
          : 
          ""}
          {
            !this.state.flightSelected ?
              <Flights SearchData = {this.state.searchFlights} reserveClicked = {this.reserveClicked}/>
             :
            <Passengers flightSelected = {this.state.flightSelected} adultCount = {this.state.adultCount} childernCount = {this.state.childrenCount}/>
          }
          
        </div>
      </div>
    );
    }
}

export default App;
