import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


class Application extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/demo/json.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
//   constructor(){
//     super() 
//       this.state = {
//         data: []
//       }
    
//   }
//   callApi(){
//     // Github fetch library : https://github.com/github/fetch
//     // Call the API page
//     fetch('http://localhost/demo/json.php') 
//     .then((result) => {
//       // Get the result
//       // If we want text, call result.text()
//       // return result.json();
//       return (
//       <table>
//       <tbody>{this.state.data.map(function(item, key) {
             
//                return (
//                   <tr key = {key}>
//                       <td>{item.UserName}</td>
//                   </tr>
//                 )
             
//              })}</tbody>
//        </table>
//     );
//     }).then((jsonResult) => {
//       // Do something with the result
//       console.log(jsonResult);
//       this.setState({data: jsonResult.UserName}).bind(this);
//     })
//   }
  
//   render() {
//     return <div>
//       <button onClick={() => this.callApi()}>
//         Click here to call API
//       </button>
//     </div>;
//   }
// }

// React.render(<Application />, document.getElementById('app'));

ReactDOM.render(
    <Application />
  ,   
  document.getElementById('root')
);
