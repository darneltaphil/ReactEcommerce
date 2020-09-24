import React from "react";

function  Shopitem (props) {
        return (
        
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={props.imageUrl} alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{props.name}</a>
                </h4>
                <h5>{props.price }</h5>
                <small style={{color:!props.quantity && "red"}}>{props.quantity ? props.quantity+" In-Stock": "Sold Out"} </small>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-primary " id={props.un} >Add to Cart</button>
              </div>
              <div className="card-footer">
              <small className="text-muted">{props.rating}</small>
              
              </div>
            </div>
          </div>
        );
    
} 
export default Shopitem;