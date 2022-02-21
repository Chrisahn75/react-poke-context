import React from 'react'
import Home from "./components/Home";
import Login from "./components/Login";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}
