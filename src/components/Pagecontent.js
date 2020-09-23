import React from "react";
import Shopitem from "./Shopitem";
import electronicsProducts from "../database/Electronics";

class  Pagecontent extends React.Component {
  constructor(props){
    super(props);
    
    this.state ={
      categoryClicked: this.props.category,
      isLoading : true, //Conditional Rendering
      electronicsProductsList: electronicsProducts
    }
    //Binding 
   // this.loadItems=this.loadItems.bind(this);
  }

  //Lifecycle Methods
  componentDidMount(prevProps, prevState){
    if(prevState){
    if (this.props.category !== prevState.categoryClicked) {
      this.setState({categoryClicked:prevProps.category });
      const cat = this.state.categoryClicked
      console.log(" Category Clicked "+ cat)
    }
    }
    

    setTimeout(() => {
      this.setState({
        isLoading: false,
        
      })
    }, 2500)

   //this.loadItems();
  // console.log("Default Choice "+this.state.categoryClicked)
  // console.log(electronicsProducts);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.category !== prevProps.category) {
      this.setState({categoryClicked:this.props.category });
      const cat = this.state.categoryClicked
      console.log(" Category Clicked "+ cat)
    }
    
  }

//   loadItems= () => {
//     const electronicsProductsList= electronicsProducts.map(item => <Shopitem  key={item.id} imageUrl= {item.image} price= {item.price} name= {item.name} description={item.description} addtocart= {item.addtocart} quantity={item.quantity} rating= "&#9733; &#9733; &#9733; &#9733; &#9734;" />)
   
//    this.setState({
//      electronicsProductsList:electronicsProductsList
//    })
//   console.log(this.state.electronicsProductsList);
// }

  render(){

 
        return (<>
          <div className="row">
          {this.state.electronicsProductsList.map(item => <Shopitem  key={item.id} imageUrl= {item.image} price= {item.price} name= {item.name} description={item.description} addtocart= {item.addtocart} quantity={item.quantity} rating= "&#9733; &#9733; &#9733; &#9733; &#9734;" />)}
           </div>  </>
        );
      } 
}
export default Pagecontent;