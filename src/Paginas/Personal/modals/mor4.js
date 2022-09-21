import React, { useState } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Hoja from '../Actualizar hoja filiacion';
import Axios from 'axios';

const Modal4 = () => {
  const [abierto, setAbierto] = useState(false)
  const [pacienteBody, setPacienteBody] = useState({
    dni: null,
    apellidos: null,
    nombres: null,
    fecha_nacimiento: null,
    estado_civil: null,
    nombre_padre: null,
    nombre_madre: null,
    num_hist_cli: null,
    sexo: null,
    tipo_seguro: null,
    fallecido_padre: null,
    fallecido_madre: null,
    departamento: null,
    provincia: null,
    distrito: null,
    direccion: null,
    localidad: null,
    sector: null,
    referencia: null,
    num_telefono: null,
    num_celular: null
    
  })

  const abrirModal = () => {
    setAbierto(true);
  }
  const cerrarModal = () => {

    datos()
    setAbierto(false);
    
  }
  const datos = () => {
    
    console.log(pacienteBody)
    
    Axios.put(`http://localhost:5000/usuarios/Paciente/${pacienteBody.dni}`, {
      id: pacienteBody.dni,
      apellidos: pacienteBody.apellidos,
      nombres: pacienteBody.nombres,
      fecha_nacimiento: pacienteBody.fecha_nacimiento,
      estado_civil: pacienteBody.estado_civil,
      nombre_padre: pacienteBody.nombre_padre,
      nombre_madre: pacienteBody.nombre_madre,
      num_hist_cli: pacienteBody.num_hist_cli,
      sexo: pacienteBody.sexo,
      tipo_seguro: pacienteBody.tipo_seguro,
      fallecido_padre: pacienteBody.fallecido_padre,
      fallecido_madre: pacienteBody.fallecido_madre,
      departamento: pacienteBody.departamento,
      provincia: pacienteBody.provincia,
      distrito: pacienteBody.distrito,
      direccion: pacienteBody.direccion,
      localidad: pacienteBody.localidad,
      sector: pacienteBody.localidad,
      referencia: pacienteBody.referencia,
      num_telefono: pacienteBody.num_telefono,
      num_celular: pacienteBody.num_celular,
      tipo: "Paciente"
    })
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

          <Button color="secondary" onClick={abrirModal}>Hoja del afiliado</Button>
          <Modal isOpen={abierto} style={modalStyles}>
            <ModalFooter>
              <Hoja pacBody={pacienteBody} setPacBody={setPacienteBody} />
              <Button color="secondary" id="izq">Actualizar</Button>
              <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>
              
            </ModalFooter>
          </Modal>

        </div></div>


    </>


  )

}

export default Modal4;

