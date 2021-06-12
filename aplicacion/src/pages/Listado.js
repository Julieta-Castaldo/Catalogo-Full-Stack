import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import ListadoApi from '../components/ListadoApi';
import axios from 'axios';
import { Link } from "react-router-dom";



class Listado extends Component {
    constructor(){
        super();
        this.state = {
          api:null
        }
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount(){
      axios.get(`http://localhost:3000/listado/`)
        .then(res => {
          console.log(res)
          this.setState({
            api:res.data
          })
        })
    }

    refresh(){
      axios.get(`http://localhost:3000/listado/`)
        .then(res => {
          console.log(res)
          this.setState({
            api:res.data
          })
        })
    }

    render() {
        if (this.state.api != null) {
        return(
            <div>
                <Breadcrumb>
                  <Breadcrumb.Item><Link to='/'>Inicio</Link></Breadcrumb.Item>
                  <Breadcrumb.Item href="/catalogo" active>Catálogo</Breadcrumb.Item>
                </Breadcrumb>
                                          
            <div class="container-fluid col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-body">                            
                  <table class="table table-hover">                          
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.api.map(datos => <ListadoApi datos={datos} refresh={this.refresh}/>)}              
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
            
          )
        } else {
          return(
            <div>Cargando</div>
          )
        }
    }
}

export default Listado;