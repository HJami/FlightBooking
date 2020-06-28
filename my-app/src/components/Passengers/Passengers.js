import React from "react"
import Passesger from "../Passenger/Passenger";


class Passengers extends React.Component {

    constructor(props){
        super(props);
        this.passengerList = this.genPassengerList();

        this.state = {allPassengerDataValid: false};

    }
    
      genPassengerList = () => {
        let passengers = [];
        for (let index = 0; index < this.props.adultCount; index++) {
            passengers.push({isChild: false, number: index + 1, isFilled: false});
          }
          for (let index = 0; index < this.props.childernCount; index++) {
            passengers.push({isChild: true, number: index + 1, isFilled: false});
          }
          return passengers;
  
      }

    
    reserveDone = () => {
        alert("Flight Reserved!");
    }  

    passengerNameChange = (i, isFilled) => {
      console.log(this.passengerList);
      this.passengerList[i].isFilled = isFilled;
      let res = true;
      for (let index = 0; index < this.passengerList.length; index++) {
        if (!this.passengerList[index].isFilled) {
          res = false;
          break;
        }
      }
      
      this.setState({allPassengerDataValid: res});

    }
    
    render = () => {
        console.log(this.props.adultCount);
        return (
            <div>
            <form>
                {this.passengerList.map((item, index) => {
                    return <Passesger key={index} passengerData = {item} passengerNameChange = {this.passengerNameChange} i={index}/>
                })}   
                <input type="submit" id="btnSubmit" value="Purchase the Ticket"
                       onClick={this.reserveDone} style={{visibility: this.state.allPassengerDataValid ? "visible" : "hidden"}}/>
            </form>    
            </div>
          );
    }
}

export default Passengers;