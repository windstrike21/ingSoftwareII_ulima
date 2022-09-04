import React, { useState } from "react";
import Modal1 from './modals/modal_Registrar1';
import Modal2 from './modals/modal_Registrar2';
import Modal3 from './modals/modal_Delete';

function Registro_Personal() {
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  return (
    <div className="App mt-5">

      <h1>Hey, click on the button to open the modal.</h1>

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


      <div className="container mt-3">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen3(true);
        }}
      >
       Abrir modal 3 - Eliminar
      </button>
      {modalOpen3 && <Modal3 setOpenModal3={setModalOpen3} />}
      </div>


    </div>
  );
}

export default Registro_Personal;