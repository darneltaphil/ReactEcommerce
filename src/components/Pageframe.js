import React, { Component } from "react";
//import Sidebar from "./Sidebar";
import Pagecontent from "./Pagecontent";

class  Pageframe extends Component {
  constructor(){
    super();

    this.state = {
      category: "electronics",
    };

    //Binding
   this.handleChoice = this.handleChoice.bind(this);
}

  //Lifecycle Methods
  componentDidMount(){
   // this.setState({category:this.state.category })
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.category !== prevState.category) {
      this.setState({category:this.state.category })
      console.log("props captured "+this.state.category);
    }
  }

  //My Methods
handleChoice = (e) => {
   // const choice = event.target.id;
    this.setState({
      category:e.target.id
    })
}
render() {
  return (
    <div className="container">
        
      <div className="row">
        
            <div className="col-lg-3">
                <h1 class="my-4">All In One Shop</h1>
              <div class="list-group card hover ">
                <div className="card-header bg-primary text-white display-4">Categories</div>
                <a  id="electronics" class="list-group-item" onClick={this.handleChoice}>Home Applicances</a>
                <a id="sports" class="list-group-item " onClick={this.handleChoice}>Sports</a>
                <a  id="food" class="list-group-item" onClick={this.handleChoice}>Culinary</a>
              </div>
            </div>
              
            <div className="col-lg-9 pt-4" >
            <Pagecontent category={this.state.category}/>
            </div>
       
      </div>
        
    </div>

  );
}
    
}
export default Pageframe;