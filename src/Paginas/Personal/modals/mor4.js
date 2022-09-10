import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Hoja from '../Actualizar hoja filiacion';

class Modal4 extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">

      <Button color="secondary" onClick={this.abrirModal}>Hoja del afiliado</Button>
      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <Hoja/>
        <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal> 
        
      </div></div>

        
      </>

      
    )
  }
}

export default Modal4;

