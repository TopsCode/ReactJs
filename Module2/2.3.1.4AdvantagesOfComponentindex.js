import React from 'react';
import ReactDOM from 'react-dom';

class MyTestClass extends React.Component{
  render(){
    return(<div>
      <div>
        <label>
          Some Data Title
        </label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius exercitationem, odit velit doloremque nihil nesciunt libero. Impedit illo provident harum libero magnam obcaecati ipsa ab. Inventore quidem dignissimos eos.
        </p>
      </div>  
    </div>)
  }
} 
 
ReactDOM.render(<MyTestClass Data = "Sending Data"/>,
  document.getElementById('root')
);
