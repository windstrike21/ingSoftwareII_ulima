import React from "react";

import InicioHojaFiliacion from "../../Componentes/Inicio a hoja filiacion";
import Modal1 from "../Personal/modals/ModCrearPac";



function Registro_Personal() {
  
  
  return (


    <div className="Registro_Personal mt-5">

      <div className="d-grid gap-2 col-6 mx-auto justify-content-center">
        <h1>Registro De Afiliación</h1>
      </div>


      <div className="d-grid gap-2 col-9 mx-auto justify-content-end">
        <div className="row mt-3 mb-3 ">
          <Modal1 />
        </div>
      </div>


      <div className="container border 2px mt-3">
        <table className="table ">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <InicioHojaFiliacion />
            <InicioHojaFiliacion />
            <InicioHojaFiliacion />
            <InicioHojaFiliacion />
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Registro_Personal;