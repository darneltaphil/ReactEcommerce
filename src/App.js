import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import "./components/vendor/bootstrap/css/bootstrap.min.css";
import "./components/css/shop-homepage.css";
import Pageframe from './components/Pageframe';
import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import axios from 'axios'; //USING AXIOS TO FETCH BLOG POST WITH AN API
import Swal from 'sweetalert2'; //INTERACTIVITY AND FEEDBACK
export default class  App extends React.Component  {
  constructor(){
    super();
    this.state = {

    }

  }

render(){
   return (
      <BrowserRouter>
          <Header />
          <Route exact path="/" render={ () => {
                          return(
                          <Pageframe />
                              )
                      }} />
          <Switch>
          <Route exact path="/login" render={ () => {
                          return(
                              <Login/>
                          );
                      }} />
          <Route exact path="/cart" render={ () => {
                          return(
                              <Cart/>
                          );
                      }} />
          <Route exact path="/signup" render={ () => {
                          return(
                              <Signup/>
                          );
                      }} />
                  </Switch>
      </BrowserRouter>

    );
  }
}

