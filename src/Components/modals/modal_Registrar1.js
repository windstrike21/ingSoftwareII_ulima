import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal2 from '../modals/modal_Registrar2'

function Modal({ setOpenModal1 }) {
  return (

    
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal1(false);
            }}
          >
            X
          </button>
        </div>
        

        <div className="container mt-2 border 1px ">
            <div className="row mb-1">
                <label className="col-2">Apellidos:</label>
                <input className="col-5"></input>
                <label className="col-2">N° Historia clinica:</label>
                <input className="col-3"></input>
            </div>
            <div className="row mb-1">
                <label className="col-2">Nombres:</label>
                <input className="col-5"></input>
                <label className="col-2">Sexo:</label>
                <input className="col-3"></input>
            </div>
            <div className="row mb-1">
                <label className="col-2">Fecha de nacimiento:</label>
                <input className="col-5"></input>
                <label className="col-2">Tipo de seguro:</label>
                <input className="col-3"></input>
            </div>
            <div className="row mb-1">
                <label className="col-2">Estado civil:</label>
                <input className="col-5"></input>
                <label className="col-2">DNI:</label>
                <input className="col-3"></input>
            </div>
            <div className="row mb-1"> 
                <label className="col-2">Nombre del padre:</label>
                <input className="col-5"></input>
                <label className="col-2">Fallecido:</label>
                <input className="col-3"></input>
            </div>
            <div className="row mb-1">
                <label className="col-2">Nombre de la madre:</label>
                <input className="col-5"></input>
                <label className="col-2">Fallecido:</label>
                <input className="col-3"></input>
            </div>
      </div>


        <div className="footer">
          <button
            onClick={() => {
              setOpenModal1(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          
          <button onClick={() => {
              setOpenModal1(false);
            }}>Continue</button>


        </div>
      </div>
    </div>
  );
}

export default Modal;