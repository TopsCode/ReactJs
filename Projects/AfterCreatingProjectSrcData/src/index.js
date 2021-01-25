import React from 'react';
import ReactDOM from 'react-dom';

class MyTestClass extends React.Component{
  render(){
    return(<div>
      <div>
        <label>
          { this.props.Title }
        </label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius exercitationem, odit velit doloremque nihil nesciunt libero. Impedit illo provident harum libero magnam obcaecati ipsa ab. Inventore quidem dignissimos eos.
        </p>
      </div>  
    </div>)
  }
} 


class MainDisp extends React.Component{
  render(){
    return(<div>
      <MyTestClass Title = "Sending title Data"/>
      <MyTestClass Title = "Sending title "/>
      <MyTestClass Title = "Sending title Different"/>
      <MyTestClass Title = "Sending title Example"/>
      <MyTestClass Title = "Sending title Something"/>
    </div>)
  }
}
 
ReactDOM.render(<MainDisp/>,
  document.getElementById('root')
);
