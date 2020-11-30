import React from "react";
import ReactDOM from "react-dom";

import  Home  from "./component/Home";
import  About  from "./component/About";
import  Contact  from "./component/Contact";
import  Login  from "./component/Login";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Switch>
      {/* <ul> */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      {/* </ul> */}
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
