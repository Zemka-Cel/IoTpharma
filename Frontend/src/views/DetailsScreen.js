import React from "react";
import "../style/DetailsScreenStyle.css";
import Axios from "axios";

import {FiEdit} from "react-icons/fi";
import { Button } from "antd";

class DetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      distance: [],
      shelveOne: [],
      shelveTwo: [],
      weight: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://api.thingspeak.com/channels/1064445/fields/1.json?results=1&SBN517D6DY76WTTY"
    ).then((response) => {
      this.setState({ distance: response.data.feeds });
    });
    Axios.get("http://localhost:4300/shelveOne").then((response) => {
      this.setState({ shelveOne: response.data });
    });
    Axios.get("http://localhost:4300/shelveTwo").then((response) => {
      this.setState({ shelveTwo: response.data });
    });
    Axios.get(
      "https://api.thingspeak.com/channels/1072482/fields/1.json?api_key=3GQ72KTV2JNUC4I2&results=1"
    ).then((response) => {
      this.setState({ weight: response.data.feeds });
    });
    // interval 5000 
  }

  render() {
    return (
      <body>
        <h3 className="text-center mb-4">Shelves Map</h3>
        {this.state.shelveOne.map((p1) => (
          <div>
             <div className="shelve font-weight-bold d-flex justify-content-between"><p className="p-1 m-0">Distance measuring shelf:</p> <Button  onClick={() => this.props.history.push("/edit")}><FiEdit></FiEdit></Button></div> 
            <div className="prodDetails">
              {this.state.distance.map((d) => (
                <div className="pt-3 pb-3 ml-3">
                  <li>
                    <strong>Sensor data:</strong> {d.field1}
                  </li>
                  <li>
                    <strong>Product:</strong> {p1.name}
                  </li>
                  <li>
                    <strong>Shelf height:</strong> {p1.shelveHeight} (cm)
                  </li>
                  <li className="mb-2">
                    <strong>Product height:</strong> {p1.productHeight} (cm)
                  </li>
                  <li>
                    <strong>Total:</strong>{" "}
                    {(p1.shelveHeight - d.field1) / p1.productHeight}
                  </li>
                </div>
              ))}
            </div>
          </div>
        ))}

        {this.state.shelveTwo.map((p2) => (
          <div>
            <div className="shelve font-weight-bold d-flex justify-content-between"><p className="p-1 m-0">Weight measuring shelf:</p> <Button  onClick={() => this.props.history.push("/editTwo")}><FiEdit></FiEdit></Button></div>
            <div className="prodDetails">
              {this.state.weight.map((d) => (
                <div className="pt-3 pb-3 ml-3">
                  <li>
                    <strong>Sensor data:</strong> {d.field1}
                  </li>
                  <li>
                    <strong>Product:</strong> {p2.name}
                  </li>
      
                  <li className="mb-2">
                    <strong>Product weight:</strong> {p2.productWeight} (gr)
                  </li>
                  <li>
                    <strong>Total:</strong>{" "}
                    { d.field1 / p2.productWeight}
                  </li>
                </div>
              ))}
            </div>
          </div>
        ))}
      </body>
    );
  }
}

export default DetailsScreen;
