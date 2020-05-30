import React from "react";
import "../style/DetailsScreenStyle.css";
import Axios from "axios";

import {FiEdit} from "react-icons/fi";

class DetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      distance: [],
      shelveOne: [],
      shelveTwo: [],
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
  }

  render() {
    return (
      <body>
        <h3 className="text-center mb-4">Shelves Map</h3>
        {this.state.shelveOne.map((p1) => (
          <div>
            <div className="shelve font-weight-bold">Distance measuring shelf:  </div> 
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
            <div className="shelve font-weight-bold">Weight measuring shelf:</div>
            <div className="prodDetails">
              {this.state.distance.map((d) => (
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
