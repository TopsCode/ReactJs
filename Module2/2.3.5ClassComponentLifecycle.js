import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
   	console.log("test");
      this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}
//Content Class initialzation 
class Content extends React.Component {
   // componentWillMount() {
   //    console.log('First called automatically when page will be loaded Component MOUNT!')
   // }
   // componentDidMount() {
   //    console.log('After will Mount method DidMount call')
   // }
   // componentWillReceiveProps(newProps) {    
   //    console.log('This WILL RECIEVE PROPS!')
   // }
   // // shouldComponentUpdate(newProps, newState) {
   // //    return true;
   // // }
   // componentWillUpdate(nextProps, nextState) {
   //    console.log('Component WILL UPDATE!');
   // }
   // componentDidUpdate(prevProps, prevState) {
   //    console.log('Component DID UPDATE!')
   // }
   // componentWillUnmount() {
   //    console.log('Component WILL UNMOUNT!')
   // }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}
ReactDOM.render(<App />,document.getElementById('root'));
