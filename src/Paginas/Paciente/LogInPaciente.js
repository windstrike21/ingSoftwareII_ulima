import React, { Component } from 'react';
import { Link,  } from 'react-router-dom';

const LogInPaciente = () => {
  return (
    <div className='coutainerPrincipal'>
      <div className='containerSecundario'>
        <div className='form-group'>
          <label> Tipo documento</label>
        </div>
        <Link to="Actualizar_hoja_filiacion">Actualizar hoja filiacion</Link>
        
      </div>

    </div>
  );
}

export default LogInPaciente