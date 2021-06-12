import React, { Component } from "react";
import Data from '../products.json';  
import Producto from '../components/Producto';
import Bannerprincipal from "../components/Banner";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ModalAñadir from '../components/ModalAñadir';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      datos:null
    }
    this.refresh = this.refresh.bind(this)
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/listado`)
    .then(res => (
      this.setState({
        datos:res.data
      })
    ))
  }

  refresh(){    //Función para renderizar cambios al añadir productos
    axios.get(`http://localhost:3000/listado`)
    .then(res => (
      this.setState({
        datos:res.data
      })
    ))
  }

  render(){
    if(this.state.datos != null){
    return(
      <div> 
         <Breadcrumb>
                <Breadcrumb.Item href="/" active>Inicio</Breadcrumb.Item>
        </Breadcrumb>
      <Bannerprincipal/>

      { /* LISTADO DE PRODUCTOS DESDE LA API*/
       <div className="container text-center">  
          <div className="row" >
            {this.state.datos.map(datos => <Producto datos={datos}/>)}
          </div>
          <ModalAñadir refresh={this.refresh}></ModalAñadir>
       </div>
       }
     </div>
      
    )} else {
      return(
        <div>Cargando</div>
      )
    }
  }
}

export default Home;