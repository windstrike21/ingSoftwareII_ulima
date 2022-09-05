import React from "react";

function Modal({ setOpenModal2 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal2(false);
            }}>X</button>

        </div>
        <div className="container mt-2 border 1px ">
        <div className="row mb-1"> 
                    <label className="col-2">Departamento:</label>
                    <input className="col-5"></input>
                    <label className="col-2">Provincia:</label>
                    <input className="col-3"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Distrito:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Dirección:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Localidad:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Sector:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">Referencia:</label>
                    <input className="col-10"></input>
                </div>
                <div className="row mb-1">
                    <label className="col-2">N° Teléfono:</label>
                    <input className="col-5"></input>
                    <label className="col-2">N° Celular:</label>
                    <input className="col-3"></input>
                </div>
      </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal2(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => {
              setOpenModal2(false);
            }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;