import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  /*constructor (props) {
    super(props);
  }*/

   
  render = function() {
      return (
          <div id="dvSearchBar">
              <label>Date From  </label>
              <input id="dtFromDate"  type="date"  />
              <label>Date To  </label>
              <input id="dtToDate" type="date"  />
              <label>From </label>
              <select id="dpFromCity">
              <option value = "1">Melbourne</option>
               <option value = "2">Sidney</option>
               <option value = "3">Perth</option>
               <option value = "4">Adelaide</option>
               <option value = "5">Darwin</option>
               <option value = "6">Brisbane</option>
               <option value = "7">Alice Springs</option>
              </select> 
              <label>To </label>
              <select id="dpToCity">
              <option value = "1">Melbourne</option>
               <option value = "2">Sidney</option>
               <option value = "3">Perth</option>
               <option value = "4">Adelaide</option>
               <option value = "5">Darwin</option>
               <option value = "6">Brisbane</option>
               <option value = "7">Alice Springs</option>
              </select>
              <label>Adults </label>
              <input id="txtAdultsCount" type="number" min="1" max="50" />
              <label>Children </label>
              <input id="txtChildrenCount" type="number" min="1" max="50"/>
              <div id="dvSearchAction">
                  <button id="btnSearchFlights" onClick={this.props.searchBtnClick}>Search Flights</button>
              </div>
          </div>
      )
  }

}

 export default SearchBar;