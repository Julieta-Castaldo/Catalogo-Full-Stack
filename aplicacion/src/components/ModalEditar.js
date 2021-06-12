import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

class ModalEditar extends Component  {
    constructor(props){
        super(props);
        this.state = {
            imagenForm:'',
            nombreForm:'',
            precioForm:'',
            show:false,
            mensaje: null        
        }
    }

   
    editar(id){
        if ((this.state.nombreForm == '') || (this.state.precioForm == '') || (this.state.imagenForm == '')){
            this.setState({
                mensaje: 'Por favor, complete todos los campos del formulario'
            })
        } else {
        axios.put(`http://localhost:3000/listado/${id}`,
        {
          "name": this.state.nombreForm,
          "price": this.state.precioForm,
          "image": this.state.imagenForm
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
           this.setState({
            show:false
          })
          this.props.refresh();
        })
       

    }}

    mostrar() {
        this.setState({
            show: true,
            imagenForm: this.props.datos.image,
            nombreForm: this.props.datos.name,
            precioForm: this.props.datos.price
        });
    }

    cerrar() {
        this.setState({
            show: false, mensaje:null
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }

    render(){
        return(
            <>
        <button class="btn" onClick={() => this.mostrar()} ><i class="fa fa-pencil"></i></button>
        <Modal show={this.state.show} onHide={() => this.cerrar()}>
          <Modal.Header closeButton>
            <Modal.Title>Editar producto <strong>{this.props.datos.name}</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
              <div class="col-md-12"> 
                <form>
                  <div class="">
                    <div class="col-md-12 text-center">
                      <img src={this.state.imagenForm} style={{paddingBottom:'70'}} class="rounded" width='50%'></img>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <label>URL de la imagen</label>
                        <input class="form-control col-xs-12 col-md-12 col-lg-12" type="url" name="imagenForm" value={this.state.imagenForm} onChange={this.handleChange.bind(this)}></input>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <label>Nombre del producto</label>
                        <input class="form-control col-xs-12 col-md-12 col-lg-12" type="text" name="nombreForm" value={this.state.nombreForm} onChange={this.handleChange.bind(this)}></input>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <label>Precio</label>
                        <input class="form-control col-xs-12 col-md-12 col-lg-12" type="number" name="precioForm" value={this.state.precioForm} onChange={this.handleChange.bind(this)}></input>
                      </div>
                    </div>
                  </div>
                
                </form>
                {(this.state.mensaje != null) ?
                <Alert variant="danger">
                    {this.state.mensaje}
                </Alert>
                :
                null
                }
                    
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.editar(this.props.datos._id)}>
              Guardar cambios
            </Button>
            <Button variant="btn btn-light" onClick={() => this.cerrar()}>
              Volver
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        )
    }
}

export default ModalEditar;