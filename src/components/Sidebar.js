import React from "react";

function  Sidebar () {
    
  return (
    <>
          <h1 class="my-4">Shop Name</h1>
          <div class="list-group card">
            <a href="#" id="electronics" class="list-group-item" onClick={this.handleChoice}>Home Applicances</a>
            <a href="#" id="sports" class="list-group-item">Sports</a>
            <a href="#" id="food" class="list-group-item">Culinary</a>
          </div>
  
    </>
  );
    
}
export default Sidebar;