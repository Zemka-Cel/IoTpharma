import React from "react";
import "../style/DetailsScreenStyle.css";
import Axios from "axios";

class DetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      distance: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://api.thingspeak.com/channels/1064445/fields/1.json?results=1&SBN517D6DY76WTTY"
    ).then((response) => {
      this.setState({ distance: response.data.feeds });
    });
  }

  render() {
    return (
      <body>
        <h3 className="text-center mb-4">Shelves Map</h3>
        <div className="shelve font-weight-bold">A - 1: Aspirin</div>

        <div className="prodDetails">
          {this.state.distance.map((d) => (
            <div className="pt-3 pb-3 ml-3">
              <li>
                <strong>Sensor data:</strong> {d.field1}
              </li>
              <li>
                <strong>Product:</strong> Aspirin
              </li>
              <li>
                <strong>Shelve height:</strong> 20 (cm)
              </li>
              <li className="mb-2">
                <strong>Product height:</strong> 5 (cm)
              </li>
              <li>
                <strong>Total:</strong> {(20 - d.field1)/5}
              </li>
            </div>
          ))}
        </div>

        <div className="shelve font-weight-bold">A - 2: Tylolhot</div>

        <div className="prodDetails mb-4">
          {this.state.distance.map((d) => (
            <div className="pt-3 pb-3 ml-3">
              <li>
                <strong>Sensor data:</strong> {d.field1}
              </li>
              <li>
                <strong>Product:</strong> Tylolhot
              </li>
              
              <li className="mb-4">
                <strong>Product weight:</strong> 10(gr)
              </li>
              <li>
                <strong>Total:</strong> {d.field1/10}
              </li>
            </div>
            
          ))}
        </div>
      </body>
    );
  }
}

export default DetailsScreen;
