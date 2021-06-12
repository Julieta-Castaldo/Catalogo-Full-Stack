import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


class Navbarprincipal extends Component {
    
        render() {
            
        return(
        
        <nav class="navbar navbar-expand-sm bg-light navbar-light">

            <Link class="navbar-brand" to="/">
             <h3>Toy Shop</h3>
            </Link>
  
        <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/catalogo">Catálogo</Link>
        </li>
        </ul>  

        </nav>           
            
        )
    }
}

export default Navbarprincipal;