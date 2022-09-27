
import './App.css';

import React from "react"

import './App.css';
import Axios from "axios"

function App() {

  const [projectBody, setProjectBody] = React.useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    especialidad: ""
  })

  const registrar = (event) => {


    event.preventDefault()
    console.log(projectBody)
    Axios.post("https://ing-sw2-backend.herokuapp.com/registros_med", {
      id: projectBody.id,
      name: projectBody.name,
      lastname: projectBody.lastname,
      email: projectBody.email,
      password: projectBody.password,
      especialidad: projectBody.especialidad

    }).then(res => {
      console.log("MIRA")
      console.log(res.data);
    }).catch(console.log)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setProjectBody(prevBody => ({
      ...prevBody,
      [name]: value

    }))
  }
  return (
    <div>
      <span>id </span><input onChange={handleChange} name="id" value={projectBody.id} /><br></br>
      <span>name </span><input onChange={handleChange} name="name" value={projectBody.name} /><br></br>
      <span>lastname </span><input onChange={handleChange} name="lastname" value={projectBody.lastname} /><br></br>
      <span>email </span><input onChange={handleChange} name="email" value={projectBody.email} /><br></br>
      <span>password </span><input onChange={handleChange} name="password" value={projectBody.password} /><br></br>
      <span>especialidad </span><input onChange={handleChange} name="especialidad" value={projectBody.especialidad} />
      <button onClick={registrar}>Registrar</button>
    </div>
  );
}

export default App;
