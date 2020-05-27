import React from "react";
import Axios from "axios";
import "../style/HomeScreenStyle.css";

class HomeScreen extends React.Component {
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
        <h1 className="text-center mt-5">
          Welcome to <br></br> IoT pharmacy
        </h1>
        <p className="text-center font-weight-bold">Proof of concept</p>
        <main>
          {this.state.distance.map((d) => (
            <div id="distance" className="text-center">
              <p>
                <strong>Distance =</strong> {d.field1} (cm)
              </p>
            </div>
          ))}

          {this.state.distance.map((d) => (
            <div id="weight" className="text-center">
              <p>
                <strong>Weight =</strong> {d.field1} (gr)
              </p>
            </div>
          ))}
        </main>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => this.props.history.push("/details")}
            class="button mt-xl-5 btn text-white lead flex-fill ml-1 mr-1"
            type="button"
          >
            See the details
          </button>
        </div>
      </body>
    );
  }
}

export default HomeScreen;
