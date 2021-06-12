import React, { Component } from "react";
import Card from "react-bootstrap/Card";


class Producto extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="col-xs-12 col-md-6 col-lg-4" style={{marginBottom:'35px',marginTop:'40px'}} id="boxproductos">
                <Card>
                <Card.Img src={this.props.datos.image} />
                <Card.Body>
                    <Card.Title>{this.props.datos.name}</Card.Title>
                    <Card.Text>
                        Precio: ${this.props.datos.price}
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            
        )
    }
}

export default Producto;