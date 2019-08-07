import React, { Component } from 'react'; 
import { IoIosBoat } from "react-icons/io";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state={
        isOpen: false
    }
     handleToggle = () =>{
         this.setState({isOpen:!this.state.isOpen})
     }
    render(){
        return (
            <nav className="navbar">
            <div className="navbar-center">
            <div className="navbar-header">
            <button type="button" className="nav-btn"
                    onClick={this.handleToggle}>
           <IoIosBoat className="nav-icon" />
            </button>
                </div>
                <ul className={this.state.isOpen?"nav-linksshow-nav": "nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shipments/">Shipments</Link>
                    </li>
                    <li>
                        <Link to="/shipments/shipment">Shipment</Link>
                    </li>
                    </ul>
            </div>
            </nav>
        )
    }
    }
    
export default Navbar; 
