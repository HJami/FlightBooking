import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.obj = {
      adultCount: 0,
      childrenCount: 0
    }

    this.state = {
      reserveBtnEnabled: false
    }
  }

  searchBtnClick = () => {
    this.props.searchBtnClick(this.obj);
  }

  adultCntChanged = (e) => {
    this.obj.adultCount = e.target.value;
    this.setState({reserveBtnEnabled: this.obj.adultCount > 0});
  }

  childernCntChanged = (e) => {
    this.obj.childrenCount = e.target.value;
  }

  render = function() {
      return (
          <div className="dvSearchBar">
              <label>Date From  </label>
              <input id="dtFromDate"  type="date" defaultValue="2020-06-20" />
              <label>Date To  </label>
              <input id="dtToDate" type="date" defaultValue="2020-06-30" />
              <label>From </label>
              <select id="dpFromCity" index>
              <option value = "1">Melbourne</option>
               <option value = "2">Sidney</option>
               <option value = "3">Perth</option>
               <option value = "4">Adelaide</option>
               <option value = "5">Darwin</option>
               <option value = "6">Brisbane</option>
               <option value = "7">Alice Springs</option>
              </select> 
              <label>To </label>
              <select id="dpToCity" defaultValue = "3">
              <option value = "1">Melbourne</option>
               <option value = "2">Sidney</option>
               <option value = "3" >Perth</option>
               <option value = "4">Adelaide</option>
               <option value = "5">Darwin</option>
               <option value = "6">Brisbane</option>
               <option value = "7">Alice Springs</option>
              </select>
              <label>Adults </label>
              <input id="txtAdultsCount" type="number" min="1" max="50"  onChange = {this.adultCntChanged}/>
              <label>Children </label>
              <input id="txtChildrenCount" type="number" min="1" max="50"  onChange = {this.childernCntChanged}/>
              <div id="dvSearchAction" style={{visibility: this.state.reserveBtnEnabled ? "visible" : "hidden"}}>
                  <button id="btnSearchFlights" onClick={this.searchBtnClick}>Search Flights</button>
              </div>
          </div>
      )
  }

}

 export default SearchBar;