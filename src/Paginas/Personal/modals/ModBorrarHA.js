import React from 'react';
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Axios from 'axios';


const Modal3 =() =>{ 
  const [abierto, setAbierto] = useState(false)

  const abrirModal = () => {
    setAbierto(true);
  }
  const cerrarModal = () => {
    setAbierto(false);
  }
    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }

    const deleteHA=()=>{
      console.log("hola")
      axios.put("http://localhost:5000/usuarios/Paciente/1", 
      { 
        apellidos: null,
        nombres: null,
        fecha_nacimiento: null,
        estado_civil: null,
        nombre_padre: null,
        nombre_madre: null,
        num_hist_cli:  null,
        sexo:  null,
        tipo_seguro:  null,
        fallecido_padre:  null,
        fallecido_madre: null,
        departamento: null,
        provincia:  null,
        distrito: null,
        direccion: null,
        localidad:  null,
        sector:  null,
        referencia:  null,
        num_telefono:  null,
        num_celular: null,
        tipo: "Paciente"
      })
    }

    return(
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

