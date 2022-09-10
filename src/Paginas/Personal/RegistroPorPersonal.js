import React, { useState } from "react";
import Modal1 from "../Personal/modals/mor1";
import Modal2 from "../Personal/modals/mor2";
import Modal3 from "../Personal/modals/mor3";
import Modal4 from "../Personal/modals/mor4";

function Registro_Personal() {

  return (
    

    <div className="Registro_Personal mt-5">

<div className="d-grid gap-2 col-6 mx-auto justify-content-center">
        <h1>Registro De Afiliación</h1>
      </div>
      
   
      <div className="d-grid gap-2 col-9 mx-auto justify-content-end">
      <div className="row mt-3 mb-3 ">
        <Modal1/>
      </div>
      </div>


<div className="container 2px mt-3">
<table className="table ">
    <thead>
      <tr></tr>
    </thead>
    <tbody>
      <tr className="Row">
        <td>
          <div className="col">
            Codigo usuario 
          </div>
        </td>
        <td> 
        <div className="container justify-content-end d-grid gap-2  ">

            <Modal4/>
            <Modal3/>
             </div> 
        </td>
      </tr>

      <tr className="Row">
        <td>
          <div className="col">
            Codigo usuario 
          </div>
        </td>
        <td> 
        <div className="container justify-content-end d-grid gap-2  ">

            <Modal4/>
            <Modal3/>
             </div> 
        </td>
      </tr>

      <tr className="Row">
        <td>
          <div className="col">
            Codigo usuario 
          </div>
        </td>
        <td> 
        <div className="container justify-content-end d-grid gap-2  ">

            <Modal4/>
            <Modal3/>
             </div> 
        </td>
      </tr>
      <tr className="Row">
        <td>
          <div className="col">
            Codigo usuario 
          </div>
        </td>
        <td> 
        <div className="container justify-content-end d-grid gap-2  ">

            <Modal4/>
            <Modal3/>
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