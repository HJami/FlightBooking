import React from "react";
import "./Flight.css";
import img3 from "../../Images/Img3.PNG";

class Flight extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          isEntered: false,
          isLeft: true
        }
    }

    divEntered = () => {
      //alert('E');
      this.setState({isEntered: true, isLeft: false});
    }

    divLeft = () => {
      //alert('L');
      this.setState({isEntered: false, isLeft: true});
    }

    reserveBtnClicked = () => {
      this.props.reserveClicked();
    }

    
    render = function() {
      //console.log(this.props.flightData);
      return (
            <div className = {this.state.isEntered === true ? "FlightWrapperHighlight" : "" } onMouseEnter = {this.divEntered} onMouseLeave = {this.divLeft}>
              <div className="Flight">
                  <div className="divOutbound">
                    
                    <div className="FlightNo">
                      <b>Flight Number:</b> {this.props.flightData.Outbound.FlightNo}
                    </div>
                    <div className="type"/>
                    
                    <div className="InnerFlightData">
                      <div className="departure">
                        <div className="timeloc">
                          <div className="time">{this.props.flightData.Outbound.DepartureTime}</div>
                          <div className="loc">{this.props.flightData.Outbound.DepartureLoc}</div>
                        </div>
                        <div id="dvDepDepLocation">
                        {this.props.flightData.Outbound.DepartureLocation}
                        </div>
                        <div id="dvDepDepDate">
                          {this.props.flightData.Outbound.DepartureDate}
                        </div>
                      </div>
                      
                      <div className="flight-duration">
                        <div><img src={img3} alt="duration"/></div>
                        {this.props.flightData.Outbound.FlightDuration}
                      </div>
                      
                      <div className="arrival">
                        <div className="timeloc">
                            <div className="time">{this.props.flightData.Outbound.ArrivalTime}</div>
                            <div className="loc">{this.props.flightData.Outbound.ArrivalLoc}</div>
                          </div>
                        <div id="dvDepArrLocation">
                        {this.props.flightData.Outbound.ArrivalLocation}
                        </div>
                        <div id="dvDepArrDate">
                        {this.props.flightData.Outbound.ArrivalDate}
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  <div className="divInbound">


                    <div className="FlightNo">
                    <b>Flight Number:</b> {this.props.flightData.Inbound.FlightNo}
                    </div>

                    <div className="type"/>

                    <div className="InnerFlightData">
                      <div className="departure">
                        <div className="timeloc">
                          <div className="time">{this.props.flightData.Inbound.DepartureTime}</div>
                          <div className="loc">{this.props.flightData.Inbound.DepartureLoc}</div>
                        </div>
                        <div id="dvRetDepLocation">
                        {this.props.flightData.Inbound.DepartureLocation}
                        </div>
                        <div id="dvRetDepDate">
                        {this.props.flightData.Inbound.DepartureDate}
                        </div>
                      </div>
                      
                      <div className="flight-duration">
                      <div><img src={img3} alt="duration"/></div>
                      {this.props.flightData.Inbound.FlightDuration}
                      </div>
                      
                      <div className="arrival">
                        <div className="timeloc">
                            <div className="time">{this.props.flightData.Inbound.ArrivalTime}</div>
                            <div className="loc">{this.props.flightData.Inbound.ArrivalLoc}</div>
                          </div>
                        <div id="dvRetArrLocation">
                        {this.props.flightData.Inbound.ArrivalLocation}
                        </div>
                        <div id="dvRetArrDate">
                        {this.props.flightData.Inbound.ArrivalDate}
                        </div>
                      </div>
                    </div>

                  </div>
              
              </div>
              <div style = {{display: this.state.isEntered === true ? 'block' : 'none'}} className = "ReserveBtn"> 
                <input type="button" value="Make a Booking!" onClick={this.reserveBtnClicked}/>
              </div> 
            </div>

        )
    }
    
}

export default Flight;