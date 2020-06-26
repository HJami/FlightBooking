import React from 'react'
import './Passenger.css'

class Passenger extends React.Component {
    /*constructor (props) {

    }*/

    render = () => {
        return (
            <div className="Passenger">
               <div className="PassengerHeader">
                   {this.props.passengerData.isChild ? "Child " : "Adult "}
                   {this.props.passengerData.number}
                   &nbsp;
                   Information
               </div>
               <div className="PassengerData">
                   <div>
                     <span>First Name: </span>
                     <input id = "edFirstName" type="text"/>
                   </div>
                   <div>
                     <span>Last Name: </span>
                     <input id = "edLastName" type="text"/>
                   </div>
                   <div>
                     <span>Document Number: </span>
                     <input id = "edDocumentNumber" type="text"/>
                   </div>
               </div>
            </div>
        )
    }

}

 export default Passenger;