import React, { Component } from "react";
import Shopitem from "./Shopitem";
import electronicsProducts from "../database/Electronics";
import foodProducts from "../database/Food";
import sportProducts from "../database/Sport";
import allProducts from "../database/Allitems";

class  Pageframe extends Component {
  constructor(){
    super();

    this.state = {
      categoryClicked:"",
      isLoading : true, //Conditional Rendering
      productsList: allProducts,
      title:"All Items"
    };

    //Binding
   this.handleChoice = this.handleChoice.bind(this);
}

  //Lifecycle Methods
  componentDidMount(prevProps, prevState){
     setTimeout(() => {
        this.setState({
          isLoading: false,
        })
      }, 2500)
  }
  //My Methods
handleChoice = (e) => {
    this.setState({
      categoryClicked:  e.target.id
    })
    if(e.target.id=='all'){this.setState({
      productsList: allProducts,
      title:"All Items"
    })}
    if(e.target.id=='electronics'){this.setState({
      productsList: electronicsProducts,
      title:"Electro-Appliances"
    })}
    if(e.target.id=='food'){this.setState({
      title:"Food Items",
      productsList: foodProducts,
    })}
    if(e.target.id=='sports'){this.setState({
      productsList: sportProducts,
      title:"Sports Items"
    })}
}
render() {
  return (
    <div className="container-fluid">
        
      <div className="row">
        
            <div className="col-lg-3">
                <h1 className="my-4"></h1>
              <div className="list-group card hover ">
                <div className="card-header bg-info text-white h4">Categories</div>
                <a  id="all" className="list-group-item btn btn-light" onClick={this.handleChoice}>All Products</a>
                <a  id="electronics" className="list-group-item btn btn-light" onClick={this.handleChoice}>Home Applicances</a>
                <a id="sports" className="list-group-item btn btn-light" onClick={this.handleChoice}>Sports</a>
                <a  id="food" className="list-group-item btn btn-light" onClick={this.handleChoice}>Culinary Items</a>
              </div>
            </div>
              
            <div className="col-lg-9 pt-4" > <div className="display-4 mb-5">{this.state.title}</div>
            <div className="row table-hover">
 
            {this.state.isLoading ? 
          <center><h1 className='text-primary flex'>Loading...</h1></center> :
          <>{this.state.productsList.map(item => <Shopitem  key={item.id} un={item.id} imageUrl= {item.image} price= {item.price} name= {item.name} description={item.description} addtocart= {item.addtocart} quantity={item.quantity} rating= "&#9733; &#9733; &#9733; &#9733; &#9734;" />)}</>}

        </div>
        </div>
       
      </div>
        
    </div>

  );
}
    
}
export default Pageframe;