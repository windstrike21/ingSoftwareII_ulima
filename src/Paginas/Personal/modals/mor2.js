import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const Modal2 = (props) => {
  const [abierto, setAbierto] = useState(false)

  const abrirModal = () => {
    setAbierto(true);
  }
  const cerrarModal = () => {
    setAbierto(false);
  }


  const modalStyles = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
  
  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button color="primary" onClick={abrirModal}>Siguiente</Button>

        </div></div>

      <Modal isOpen={abierto} style={modalStyles}>
        <ModalHeader>
          Datos Opcionales
        </ModalHeader>
        <ModalBody>

          <FormGroup>
            <div className="row mb-1">
              <label className="col-2">Departamento:</label>
              <input className="col-5"></input>
              <label className="col-2">Provincia:</label>
              <input className="col-3"></input>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="row mb-1">
              <label className="col-2">Distrito:</label>
              <input className="col-10"></input>
            </div>
            <div className="row mb-1">
              <label className="col-2">Dirección:</label>
              <input className="col-10"></input>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="row mb-1">
              <label className="col-2">Localidad:</label>
              <input className="col-10"></input>
            </div>
            <div className="row mb-1">
              <label className="col-2">Sector:</label>
              <input className="col-10"></input>
            </div>
          </FormGroup>

          <FormGroup>
            <div className="row mb-1">
              <label className="col-2">Referencia:</label>
              <input className="col-10"></input>
            </div>
            <div className="row mb-1">
              <label className="col-2">N° Teléfono:</label>
              <input className="col-5"></input>
              <label className="col-2">N° Celular:</label>
              <input className="col-3"></input>
            </div>
          </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={cerrarModal}>Cancelar</Button>
          <Button href="./registro" color="primary" >Confirmar</Button>
        </ModalFooter>
      </Modal>

    </>


  )

}

export default Modal2;

