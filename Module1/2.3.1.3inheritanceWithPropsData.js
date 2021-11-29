import React from 'react';
import ReactDOM from 'react-dom';

class MyTestClass extends React.Component{
  render(){
    return(<div>
      <MyTestClass1/>
      <br/>
      {this.props.Data}
      <br/>
      My Test Class</div>)
  }
} 

class MyTestClass1 extends React.Component{
  render(){
    return(<div>
      
      My Test Class 1
      </div>)
  }
} 
ReactDOM.render(<MyTestClass Data = "Sending Data"/>,
  document.getElementById('root')
);
