// import React from 'react';
// import Axios from 'axios';



// class HomeScreen extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: []
//         };
//     }
    
//     componentDidMount() {
//         Axios.get('https://api.thingspeak.com/channels/1064445/fields/1.json?results=10')
//             .then(response => {
//                 this.setState({ products: response.data })
//             })
//     }
    

//     render() {
//         return (
//             <div>
//                 <h1 className="text-center">Welcome to <br></br> IoT pharmacy</h1>
//                 <p  className="text-center">Proof of concept</p>
//                 {this.state.products.map(product => (
//                             <div>
//                                 <p>({product.id}) </p>
//                              </div>
                             
//                              ))}
                        


//             </div>
//         )
//     }
// }

// export default HomeScreen;

import React from 'react';
import Axios from 'axios';



class HomeScreen extends React.Component {
    state = { data: [] };

    componentDidMount() {
      fetch('https://api.thingspeak.com/channels/1064445/feeds.json?results=2/')
        .then(response => response.json())
        .then(data =>
          this.setState({data: data.field1})
        );
    }

    render() {
      return (
        <div>
          <ul>
            {this.state.data.map(el => (
              <li>{el.field1}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default HomeScreen;