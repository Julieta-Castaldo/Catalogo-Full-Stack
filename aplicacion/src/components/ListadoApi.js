import React, { Component } from "react";
import axios from 'axios';
import VerDetalle from './VerDetalle';
import ModalEditar from './ModalEditar';

class ListadoApi extends Component {
    constructor(props){
        super(props);
    }

    eliminar(id){
        axios.delete(`http://localhost:3000/listado/${id}`)
        .then(res => {
            console.log(res);
            this.props.refresh();
        })
    }

    detalle(id){
        document.getElementById(id).click();
    }

    render() {
        return(
            <tr>
            <td><a type="button" style={{color:'#007bff'}} onClick={() => this.detalle(this.props.datos._id)} >{this.props.datos.name}</a></td>
                <td>$ {this.props.datos.price}</td>
                <td class="text-right">
                    <VerDetalle datos={this.props.datos}/>
                    <ModalEditar datos={this.props.datos}  refresh={this.props.refresh} ></ModalEditar>
                    <button class="btn" onClick={() => this.eliminar(this.props.datos._id)}><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            
        )
    }
}

export default ListadoApi;