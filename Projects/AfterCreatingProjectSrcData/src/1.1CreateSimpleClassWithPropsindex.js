import React from 'react';
import ReactDOM from 'react-dom';

class MyTestClass extends React.Component{
  render(){
    console.log(this.props.Data);
    return(<div>My Test Class
      <br/>
      
      {this.props.Data}
    </div>)
  }
} 


ReactDOM.render(<MyTestClass Data="My Class Data"/>,
  document.getElementById('root')
);
