import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Modal2 from "./mor2";

class Modal1 extends React.Component{
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
      <Button color="primary" onClick={this.abrirModal}>Registro Por Personal</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Datos Obligatorios
        </ModalHeader>
        <ModalBody>
          <FormGroup>
          <div className="row mb-1">
                <label className="col-2">Apellidos:</label>
                <input className="col-5"></input>
                <label className="col-2">N° Historia clinica:</label>
                <input className="col-3"></input>
            </div>
          </FormGroup>

          <FormGroup>
          <div className="row mb-1">
                <label className="col-2">Nombres:</label>
                <input className="col-5"></input>
                <label className="col-2">Sexo:</label>
                <input className="col-3"></input>
            </div>
          </FormGroup>

          <FormGroup>
          <div className="row mb-1">
                <label className="col-2">Fecha de nacimiento:</label>
                <input className="col-5"></input>
                <label className="col-2">Tipo de seguro:</label>
                <input className="col-3"></input>
            </div>
                 
          </FormGroup>
          <div className="row mb-1">
                <label className="col-2">Estado civil:</label>
                <input className="col-5"></input>
                <label className="col-2">DNI:</label>
                <input className="col-3"></input>
            </div>

          <FormGroup>
          <div className="row mb-1"> 
                <label className="col-2">Nombre del padre:</label>
                <input className="col-5"></input>
                <label className="col-2">Fallecido:</label>
                <input className="col-3"></input>
            </div>
          </FormGroup>

          <FormGroup>
          <div className="row mb-1">
                <label className="col-2">Nombre de la madre:</label>
                <input className="col-5"></input>
                <label className="col-2">Fallecido:</label>
                <input className="col-3"></input>
            </div>
          </FormGroup>

        </ModalBody>

        <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
            <Modal2 onClick={this.abrirModal}/>
        </ModalFooter>
      </Modal>

      </>

      
    )
  }
}

export default Modal1;

