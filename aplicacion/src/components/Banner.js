import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import banner_listado from '../imagen/banner_listado.png';

class Bannerprincipal extends Component {
    
        render() {
            
        return(
          <Image src={banner_listado} fluid className="col-xs-12 col-lg-12" />
            
        )
    }
}

export default Bannerprincipal;