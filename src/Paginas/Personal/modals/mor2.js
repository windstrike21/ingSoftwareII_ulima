import React, { useState } from 'react';
<<<<<<< HEAD
import {Button, Modal, ModalHeader,Form, ModalBody, Input, Label,ModalFooter} from 'reactstrap';
=======
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
>>>>>>> master
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

        <Form id ="Formulario" className ="row align-center">
            <div className='col-5 mx-3'>
              <Label for="depart">Departamento</Label>
              <Input type="text" id="depart"/> 
              <Label for="prov">Provincia</Label>
              <Input type="text" id="prov"/> 
              <Label for="dist">Distrito</Label>
              <Input type="text" id="dist"/> 
              <Label for="dirr">Dirección</Label>
              <Input type="text" id="dirr"/> 
              <Label for="local">Localidad</Label>
              <Input type="text" id="local"/> 
              <Label for="sector">Sector</Label>
              <Input type="text" id="sector"/> 
              <Label for="refer">Referencia</Label>
              <Input type="text" id="refer"/> 
            </div>
<<<<<<< HEAD
        </Form>

=======
            </Form>
>>>>>>> master
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={cerrarModal}>Cancelar</Button>
          <Button href="./Afiliados" color="primary" >Confirmar</Button>
        </ModalFooter>
      </Modal>

    </>


  )

}

export default Modal2;

