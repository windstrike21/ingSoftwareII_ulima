import React from 'react';
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Modal3 extends React.Component{
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
      transform: 'translate(-50%, -50%)',

    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
        <Button color="danger" onClick={this.abrirModal}>Eliminar la hoja</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
         ¿ Deseas eliminar la hoja del afiliación ?
        </ModalHeader>
       
        <ModalFooter>
            <Button href="./registro" color="danger">Eliminar</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      </>

      
    )
  }
}

export default Modal3;

