import React from "react";
import "./FlightsHeader.css";
import img1 from "../../Images/Img1.PNG";
import img2 from "../../Images/Img2.PNG";

class FlightsHeader extends React.Component {

//   constructor(props) {
//     super(props)
//   }

render = function() {
    return (
        <div className="FlightsHeader" style={{visibility: this.props.showDiv ? 'visible' : 'hidden' }}>
            
            <div>
                <div><img src={img1} alt="outbound flight"></img></div>
                <div><img src={img2} alt="inbound flight"></img></div>
            </div>
            <div className="Header1">
                <div>
                    <div>Departure</div>
                    <div>Arrival</div>
                </div>
                <div>
                    <div>Departure</div>
                    <div>Arrival</div>
                </div>
            </div>

        </div>

    )
}


}

export default FlightsHeader;