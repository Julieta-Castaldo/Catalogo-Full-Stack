import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class VerDetalle extends Component  {
    constructor(props){
        super(props);
        this.state = {
            show:false        
        }
    }

    
    mostrar() {
        this.setState({
            show: true
           });
    }

    cerrar() {
        this.setState({
            show: false
        });
    }

    render(){
        return(
            <>
            <button id={this.props.datos._id} class="btn" onClick={() => this.mostrar()}><i class="fa fa-eye"></i></button>
   
  
              <Modal show={this.state.show} onHide={() => this.cerrar()}>
                <Modal.Header closeButton>
                  <Modal.Title>Detalle del Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
          
              <div class="col-md-12"> 
                <form>
                  <div class="">
                    <div class="col-md-12 text-center">
                      <img src={this.props.datos.image} style={{paddingBottom:'70'}} class="rounded" width='50%'></img>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <h6>Nombre del producto</h6>
                        <p>{this.props.datos.name}</p>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <h6>Id del producto</h6>
                        <p>{this.props.datos._id}</p>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div>
                      <div class="form-group">
                        <h6>Precio</h6>
                        <p>$ {this.props.datos.price}</p>
                      </div>
                    </div>
                  </div>
                
                </form>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.cerrar()}>
              Volver
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        )
    }
}

export default VerDetalle;