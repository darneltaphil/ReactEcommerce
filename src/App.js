import React from "react";
import Header from "./components/Header";
import "./components/vendor/bootstrap/css/bootstrap.min.css";
import "./components/css/shop-homepage.css";
import Pageframe from './components/Pageframe';

export default class  App extends React.Component  {
  constructor(){
    super();
    this.state = {

    }

  }

  render(){
        return (
        <div>
          <Header />
          <Pageframe />
        </div>
      );
  }
  
}

