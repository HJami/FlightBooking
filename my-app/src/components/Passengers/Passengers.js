import React from "react"
import Passesger from "../Passesnger/Passenger";


class Passengers extends React.Component {

    /*constructor(props){
        super(props);

    }*/
    
      genPassesngerList = () => {
        let passesngers = [];
        for (let index = 0; index < this.props.adultCount; index++) {
            passesngers.push({isChild: false, number: index + 1});
          }
          for (let index = 0; index < this.props.childernCount; index++) {
            passesngers.push({isChild: true, number: index + 1});
          }
          return passesngers;
  
      }

    
    reserveDone = () => {
        alert("Flight Reserved!");
    }  
    
    render = () => {
        console.log(this.props.adultCount);
        return (
            <div>
            <form>
                {this.genPassesngerList().map((item, index) => {
                    return <Passesger key={index} passengerData = {item}/>
                })}   
                <input type="submit" id="btnSubmit" value="Purchase the Ticket" onClick={this.reserveDone}/>
            </form>    
            </div>
          );
    }
}

export default Passengers;