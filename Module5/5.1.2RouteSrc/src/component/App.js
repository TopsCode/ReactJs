import React from 'react';
import "../styles.css";
class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><a href='/'>Home</a>&nbsp;| &nbsp;</li>
               <li><a href='about'>About Us</a>&nbsp;| &nbsp;</li>
               <li><a href='contact'>Contact Us</a>&nbsp;| &nbsp;</li>
               <li><a href='login'>Login</a>&nbsp;| &nbsp;</li>
               <li><a href='test/else'>Test</a></li>
            </ul>
            {/* <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul> */}
            {/* {this.props.children} */}



         </div>
      )
   }
}
export default App;