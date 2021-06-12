import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

class ModalAñadir extends Component  {
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

    agregar(){
      if ((this.state.nombreForm == '') || (this.state.precioForm == '') || (this.state.imagenForm == '')){
        this.setState({
            mensaje: 'Por favor, complete todos los campos del formulario'
        })
    } else{ 
        axios.post(`http://localhost:3000/listado/`,
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
          this.props.refresh();  //Renderizado del nuevo producto
        })


       
    }}

    mostrar() {
        this.setState({
            show: true,
            imagenForm:'',
            nombreForm:'',
            precioForm:''
        });
    }

    cerrar() {
        this.setState({
            show: false
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value }); 
     }

    render(){
        return(
            <>
        <Button variant="secondary" onClick={() => this.mostrar()} style={{marginBottom:'40px'}}>
         Añadir producto
        </Button>
  
        <Modal show={this.state.show} onHide={() => this.cerrar()}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir Producto</Modal.Title>
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
            <Button variant="primary" onClick={() => this.agregar()}>
              Guardar
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

export default ModalAñadir;