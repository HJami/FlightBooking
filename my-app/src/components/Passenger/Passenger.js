import React from 'react'
import './Passenger.css'

class Passenger extends React.Component {
    constructor (props) {
      super(props);

      this.filledData = {nameFilled: false, familyNameFilled: false};
    }

    nameChange = (evt) => {
      this.filledData.nameFilled = evt.target.value != "";
      this.props.passengerNameChange(this.props.i, this.filledData.nameFilled && this.filledData.familyNameFilled);
    }

    familyNameChange = (evt) => {
      this.filledData.familyNameFilled = evt.target.value != "";
      this.props.passengerNameChange(this.props.i, this.filledData.nameFilled && this.filledData.familyNameFilled);
    }

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
                     <input id = "edFirstName" type="text" onChange={this.nameChange}/>
                   </div>
                   <div>
                     <span>Last Name: </span>
                     <input id = "edLastName" type="text" onChange={this.familyNameChange}/>
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