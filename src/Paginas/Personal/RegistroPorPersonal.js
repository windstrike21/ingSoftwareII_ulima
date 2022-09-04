import React, { useState } from "react";
import Modal1 from './modals/modal_Registrar1';
import Modal2 from './modals/modal_Registrar2';
import Modal3 from './modals/modal_Delete';

function Registro_Personal() {
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  return (
    <div className="Registro_Personal mt-5">

      <h1>Registro De Afiliación</h1>
      
      <div className="container border 2px mt-3">
      <div className="container mt-3">
      <button
        className="openModalBtn" role="dialog"
        onClick={() => {
          setModalOpen1(true);
        }}
      >
       Abrir modal 1 - Registrar
      </button>
      {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1} />}
      </div>


      <div className="container mt-3">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen2(true);
        }}
      >
       Abrir modal 2 - Siguiente 
      </button>
      
      {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} />}
      </div>
      </div>


<div className="container border 2px mt-3">
<table className="table ">
    <thead>
      <tr><h1>Usuarios</h1></tr>
    </thead>
    <tbody>
      <tr className="Row">
        <td>
          <div className="col">
            Codigo usuario 
          </div>
        </td>
        <td>    
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalShow3">
            Hoja de Afiliado
          </button>
            <button
            className = "openModalBtn btn btn-danger" 
            onClick   = {() => {
            setModalOpen3(true);
            }}
      >
            Abrir modal 3 - Eliminar
            </button>
             {modalOpen3 && <Modal3 setOpenModal3={setModalOpen3} />}
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Registro_Personal;