import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilaEditarHistorialClinico from '../Componentes/FilaEditarHistorialClinico';



const HistorialClinico = () => {
    let count = 0;
    let todasCitas = []
    let tresCitas = []
    const [arr, setArr] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [citas, setCitas] = useState([])
    const [acabado, setAcabado] = useState(false)


    useEffect(() => {
        Axios.get(`/citas/Paciente/${location.state.id_usuario}`)
            .then(res => {
                setCitas(res.data)
            }).catch(console.log)


    }, [])
    useEffect(() => {
        citas.map((cita) => {
            tresCitas.push(cita)
            if (tresCitas.length % 3 == 0 || citas.length - count <= 2) {
                todasCitas.push(tresCitas)
                tresCitas = []
            }
            count++;
        })
        setArr(todasCitas)
        setAcabado(true)
    }, [citas])





    return (
        <main>
            <div className="container m-4 p-4">

                <h2>Historial Clinico{location.state.tipo == "Personal" && `: ${location.state.nombre}`}</h2>
                <br></br>
                
                



                <div className="secciones">
                    {console.log(acabado)}
                    {
                        arr.map((newTresCitas) => {
                            if (acabado) {
                                return (
                                    <FilaEditarHistorialClinico nombre={location.state.nombre} tresCitas={newTresCitas} tipo={location.state.tipo} />
                                )
                            }

                        })
                    }

                </div>
                {location.state.tipo=="Paciente" &&
                    <center className="mt-2"><button onClick={()=>navigate("Citas",{state:{nombre:location.state.nombre,id_usuario:location.state.id_usuario,usuario:location.state.tipo,tipo:location.state.tipo}})}>Citas</button></center>
                }
            </div>

        </main>
    )
}
export default HistorialClinico;