import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import registro from '../RegistroPorPersonal'

class Modal2 extends React.Component{
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
        <Button color="primary" onClick={this.abrirModal}>Siguiente</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles} >
        <ModalHeader>
          Datos Opcionales
        </ModalHeader>
        <ModalBody>

        <FormGroup>
        <div className="row mb-2 pt-2"> 
                    <label className="col-2 col-md-3">Departamento:</label>
                    <input className="col-5 col-md-3"></input>
                    <label className="col-2">Provincia:</label>
                    <input className="col-3 col-md-3"></input>
                </div>
        </FormGroup>

        <FormGroup>
        
                <div className="row mb-2">
                    <label className="col-2 col-md-3">Distrito:</label>
                    <input className="col-md-8"></input>
                </div>
        </FormGroup>
               
        <FormGroup>
                <div className="row mb-2">
                    <label className="col-2 col-md-3">Dirección:</label>
                    <input className="col-md-8"></input>
                </div>
        </FormGroup>

        <FormGroup>
                <div className="row mb-2 p-2">
                    <label className="col-2 col-md-3">Localidad:</label>
                    <input className="col-5 col-md-3"></input>
                    <label className="col-2">Sector:</label>
                    <input className="col-3 col-md-3"></input>
                </div>
        </FormGroup>

        <FormGroup>
                <div className="row mb-2 p-2">
                    <label className="col-2 col-md-3">Referencia:</label>
                    <input className="col-md-8"></input>
                </div>
                <div className="row mb-2 p-2">
                    <label className="col-auto col-md-3">N°Teléfono:</label>
                    <input className="col-5 col-md-3"></input>
                    <label className="col-auto">N°Celular:</label>
                    <input className="col-3 col-md-3"></input>
                </div>
          </FormGroup>

        </ModalBody>

        <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>Cancelar</Button>
            <Button href="./registro" color="primary">Confirmar</Button>
        </ModalFooter>
      </Modal>

      </>

      
    )
  }
}

export default Modal2;

