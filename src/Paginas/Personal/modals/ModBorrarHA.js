import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from 'axios';


const Modal3 = () => {
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
    transform: 'translate(-50%, -50%)',
  }

  const deleteHA = () => {
    console.log("hola")
    axios.delete("/hojasFiliacion/1")
      .then(res => {
        console.log("MIRA")
        console.log(res.data);

      }).catch(console.log)
    cerrarModal()
  }

  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button color="danger" onClick={abrirModal}>Eliminar la hoja</Button>

        </div></div>

      <Modal isOpen={abierto} style={modalStyles}>
        <ModalHeader>
          ¿ Deseas eliminar la hoja del afiliación ?
        </ModalHeader>

        <ModalFooter>
          <Button color="danger" onClick={deleteHA} >Eliminar</Button>
          <Button color="secondary" onClick={cerrarModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>

    </>
  )
}


export default Modal3;

