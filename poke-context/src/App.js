import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";

export const UseContext = createContext();

export default function App() {
  const [isLogged, setLogged] = useState(false);
  const value = {
    isLogged: isLogged,
    setLogged: setLogged,
  };
  return (
    <UserContext.Provider value={value}>
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
    </UserContext.Provider>
  );
}
