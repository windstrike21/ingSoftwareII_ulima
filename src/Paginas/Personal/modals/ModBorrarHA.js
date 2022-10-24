import React from 'react';
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';


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

    const deleteHA=()=>{
      Axios.put(`https:/localhost:5000/usuarios/Paciente/1`, 
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
        <Button color="danger" onClick={this.abrirModal}>Eliminar la hoja</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
         ¿ Deseas eliminar la hoja del afiliación ?
        </ModalHeader>
       
        <ModalFooter>
            <Button href="./registro" color="danger" onclick={deleteHA}>Eliminar</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      </>

      
    )
  }
}

export default Modal3;

