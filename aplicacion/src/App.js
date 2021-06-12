import React, { Component } from "react";
import Home from "./pages/Home";
import Listado from './pages/Listado';
import {BrowserRouter,Route, Link} from "react-router-dom";
import Navbarprincipal from './components/Navbar'
class App extends Component{
    constructor(){
        super();
    }
    
    render() {  
        return (
            <div>
                <div>        
                <BrowserRouter>
                <Navbarprincipal></Navbarprincipal> 
                                                                           {/*REACT ROUTER DOM para el routeo */ }
                    <Route path="/" component={Home} exact />
                    <Route path="/catalogo" component={Listado} exact/>
                                      
                </BrowserRouter>   
                </div>
            </div>
        )
    }
}

export default App;

