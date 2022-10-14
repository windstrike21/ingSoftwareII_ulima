import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Modal2 from "./mor2";

const Modal1 = () => {

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
          <Button color="primary" onClick={abrirModal}>Registro Por Personal</Button>

        </div></div>

      <Modal isOpen={abierto} style={modalStyles} >
        <ModalHeader>
          Datos Obligatorios
        </ModalHeader>
        <ModalBody>
        <Form id ="Formulario" className ="row align-center">
            <div className='col-5 mx-3'>
              <Label for="NHistoria">N°Historia clínica</Label>
              <Input type="text" id="NHistoria"/> 
              <Label for="apellido">Apellidos</Label>
              <Input type="text" id="apellido"/> 
              <Label for="nombre">Nombres</Label>
              <Input type="text" id="nombre"/> 
              <Label for="correo">Correo</Label>
              <Input type="text" id="correo"/> 
              <Label for="dni">DNI</Label>
              <Input type="text" id="dni"/> 
              <Label for="nomPadre">Nombre del Padre</Label>
              <Input type="text" id="nomPadre"/> 
            </div>

            <div className='col-5'>
              <Label for="sexo">Sexo</Label>
              <Input type="text" id="sexo"/> 
              <Label for="nacer">Fecha de Nacimiento</Label>
              <Input type="text" id="nacer"/> 
              <Label for="estado">Estado Civil</Label>
              <Input type="text" id="estado"/> 
              <Label for="seguro">Seguro</Label>
              <Input type="text" id="seguro"/> 
              <Label for="telefono">Telefono</Label>
              <Input type="text" id="telefono"/> 
              <Label for="nomMadre">Nombre de la Madre</Label>
              <Input type="text" id="nomMadre"/>
            </div>
            </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>
          <Modal2 onClick={abrirModal} type = 'submit'  />
        </ModalFooter>
      </Modal>

      <script src='DatosRegistro.js'></script>
    </>
  )
}

export default Modal1;

