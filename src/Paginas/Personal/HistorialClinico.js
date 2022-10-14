import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilaEditarHistorialClinico from '../../Componentes/FilaEditarHistorialClinico';



const HistorialClinico = () => {
    let count = 0;
    let todasCitas=[]
    let tresCitas=[]
    const [arr,setArr]=useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [citas, setCitas] = useState([])
    const [acabado,setAcabado]=useState(false)
    

    useEffect(()=>{
        Axios.get(`http://localhost:5000/citas/Paciente/${location.state.paciente_id}`)
        .then(res => {
            setCitas(res.data)
        }).catch(console.log)
        
        
    },[])
    useEffect(()=>{ 
        citas.map((cita) => {
            tresCitas.push(cita)
            if (tresCitas.length % 3 == 0 || citas.length - count <= 2) {
                todasCitas.push(tresCitas)
                tresCitas=[]
            }
            count++;     
        })
        setArr(todasCitas)
        setAcabado(true)
    },[citas])
    
    
        


return (
    <main>
        <div className="container m-4 p-4">

            <h2>Historial Clinico: {location.state.nombre}</h2>
            <br></br>
            <button type="button" className="btn btn-light" onClick={() => navigate("AgregarHistoria", { state: { nombre: location.state.nombre } })}>
                Agregar historia
            </button>

            <div className="secciones">
                {console.log(acabado)}
                { 
                    arr.map((newTresCitas)=>{
                        if(acabado){
                            return(
                               <FilaEditarHistorialClinico nombre={location.state.nombre} tresCitas={newTresCitas} />
                            )
                        }
                        
                    })
                }

            </div>
        </div>

    </main>
)
}
export default HistorialClinico;