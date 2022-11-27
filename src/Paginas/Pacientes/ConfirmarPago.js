import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, FormGroup, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ConfirmarPago = () =>{

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
      transform: 'translate(-50%, -50%)'
    }

    const navigate = useNavigate();
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={abrirModal}>Mostrar resumen de pago</Button>
      </div>
      </div>

      <Modal isOpen={abierto} style={modalStyles}>
        <ModalBody>
          <FormGroup>
          <Label>Resumen de Pago</Label>
          </FormGroup>
          <FormGroup>
            <Label for="Mode">Ahora</Label>
            <Label for="Payment">Tarjeta</Label>
            <Label for="Amount">S/.350</Label>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
        <button type="button" className="mt-3 btn btn-secondary" onClick={()=>navigate('Comprobante')}>Agendar</button>
        </ModalFooter>
      </Modal>
      </>
    )
}
export default ConfirmarPago;