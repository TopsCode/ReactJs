import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import  Home  from "./component/Home";
import  App  from "./component/App";
import  Contact  from "./component/Contact";
import  About  from "./component/About";


// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul>
//             {this.props.children}
//          </div>
//       )
//    }
// }
// export default App;

// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home</h1>
//          </div>
//       )
//    }
// }
// export default Home;

// class About extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>About</h1>
//          </div>
//       )
//    }
// }
// export default About;

// class Contact extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Contact</h1>
//          </div>
//       )
//    }
// }
// export default Contact;


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         {/* <IndexRoute component = {Home} /> */}
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
), document.getElementById('root'))







// import React from "react";
// import ReactDOM from "react-dom";


// import { LandingPage } from "./landing.page";
// import { AppLayout } from "./app.layout";
// import { ProtectedRoute } from "./protected.route";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <ProtectedRoute exact path="/app" component={AppLayout} />
//         <Route path="*" component={() => "404 NOT FOUND"} />
//       </Switch>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );
