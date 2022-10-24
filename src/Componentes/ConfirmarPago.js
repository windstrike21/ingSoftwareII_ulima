import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export const ConfirmarPagoTarjeta = () =>{

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
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={abrirModal}>Mostrar resumen de pago</Button>
      </div>
      </div>

      <Modal isOpen={abierto=true} style={modalStyles}>
        <ModalHeader>
          Iniciar Sesión
        </ModalHeader>
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
            <Button color="secondary" onClick={abrirModal}>Confirmar pago</Button>
        </ModalFooter>
      </Modal>
      </>
    )
}
export default ConfirmarPagoTarjeta;