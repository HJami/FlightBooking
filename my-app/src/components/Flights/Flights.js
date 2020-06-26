import React from "react";
import Flight from "../Flight/Flight";
import FlightsHeader from "../FlightsHeader/FlightsHeader";
import "./Flights.css";

class Flights extends React.Component {
    /*constructor (props) {
        super(props);
    }*/

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot){
    }

    componentWillUnmount(){
    }

    render = function() {
        return (
            <div className="Flights">
                
                <FlightsHeader showDiv = {this.props.SearchData.length !== 0} />

                {
                  this.props.SearchData.map(
                    (flight, index) => {
                      return (<Flight key = {index} flightData = { flight } reserveClicked = {this.props.reserveClicked}/>)
                    }
                )}
            </div>
        )
    }
}

export default Flights;