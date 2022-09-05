import React, { useState } from "react";
import Modal1 from "../Personal/modals/modal_Registrar1";
import Modal2 from "../Personal/modals/modal_Registrar2";
import Modal3 from "../Personal/modals/modal_Delete";
import Modal4 from "../Personal/Actualizar hoja filiacion";

function Registro_Personal() {
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  return (
    <div className="Registro_Personal mt-5">

      <div className="d-grid gap-2 col-6 mx-auto">
        <h1>Registro De Afiliación</h1>
      </div>
      
      <div className="d-grid gap-2 col-6 mx-auto">
      <div className="row mt-3">
      <button
        className="openModalBtn  btn btn-md btn-primary" role="dialog"
        onClick={() => {
          setModalOpen1(true);
        }}
      >
       Registrar Paciente
      </button>
      {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1} />}
      </div>


      <div className="row mt-3">
      <button
        className="openModalBtn mb-3 btn btn-md btn-primary"
        onClick={() => {
          setModalOpen2(true);
        }}
      >
      Siguiente 
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
        <div className="container d-grid gap-2 "> 
        <button
            className = "openModalBtn btn btn-md btn-primary" 
            onClick   = {() => {
            setModalOpen4(true);
            }}
      >
            Abrir modal 3 - Ver hoja de Afiliación
            </button>
             {modalOpen4 && <Modal4 setOpenModal4={setModalOpen4} />}
            
            
            <button
            className = "openModalBtn btn btn-md  btn-danger" 
            onClick   = {() => {
            setModalOpen3(true);
            }}
      >
            Abrir modal 3 - Eliminar
            </button>
             {modalOpen3 && <Modal3 setOpenModal3={setModalOpen3} />}
             </div> 
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Registro_Personal;