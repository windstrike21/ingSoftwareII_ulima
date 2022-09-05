import React from "react";

function Modal({ setOpenModal3 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal3(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
          <h1>¿Eliminar hoja de afiliado?</h1>
        </div>
        <div className="body">
          <p>Se perderá la info </p>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal3(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => {
              setOpenModal3(false);
            }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;