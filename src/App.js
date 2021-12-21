import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddContact from "./component/AddContact/AddContact";
import EditStudent from "./component/EditStudent/EditStudent";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={() => <Home />} />

        <Route path='/add'>
          <AddContact />
        </Route>
        <Route path='/edit/:id'>
          <EditStudent />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
