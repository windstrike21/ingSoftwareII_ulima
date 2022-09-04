import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogInPaciente from "../Paginas/Pacientes/LogInPaciente"


const Rutas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component ={LogInPaciente}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Rutas