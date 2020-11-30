import React from 'react';
import ReactDOM from 'react-dom';

class MyTestClass extends React.Component{
  render(){
    return(<div>My Test Class</div>)
  }
} 


ReactDOM.render(<MyTestClass/>,
  document.getElementById('root')
);
