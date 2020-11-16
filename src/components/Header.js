import React from "react";
import {Link} from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super();

        this.state = {
          countCart:'' ,
          loginState:'Logout'

        }

    }
    componentDidMount(){
      this.setState({
        countCart:this.props.count
      });
      if(!localStorage.getItem("user")==true){
        this.setState({
          loginState:"Login"
        });
      }
    }
    render() {
        return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
    <div className="container">
      <a className="navbar-brand">E-Commerce App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link"><Link to="/" className="text-white">Store</Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
        <a className="nav-link" ><Link to="/cart" className="text-white">Cart</Link>  <span className="badge badge-light">{this.state.countCart}</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" ><Link to={this.state.loginState} className="text-white">{this.state.loginState}</Link></a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>

        )}
    
}
export default Header;