import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilaEditarMedicamentos from '../../Componentes/FilaEditarMedicamentos';
import InicioAlEditarMedicamentos from '../../Componentes/InicioAlEditarMedicamentos';
import FilaEditarHistorialClinico from '../Componentes/FilaEditarHistorialClinico';



const Medicamentos = () => {
    let count = 0;
    let todosMedicamentos = []
    let tresMedicamentos = []
    const [arr, setArr] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [medicamento, setMedicamento] = useState([])
    const [acabado, setAcabado] = useState(false)

    useEffect(() => {
        Axios.get(`http://localhost:5000/citaMedicamentos/Doctor/${location.state.medicamento}`)
            .then(res => {
                setMedicamento(res.data)
            }).catch(console.log)
        }, [])

        useEffect(() => {
            medicamento.map((medicamento) => {
                tresMedicamentos.push(medicamento)
                if (tresMedicamentos.length % 3 == 0 || medicamento.length - count <= 2) {
                    todosMedicamentos.push(tresMedicamentos)
                    tresMedicamentos = []
                }
                count++;
            })
            setArr(todosMedicamentos)
            setAcabado(true)
        }, [medicamento])


    return (
        <main>
            <div className="container m-4 p-4">

                <h2>Receta</h2>
                <br></br>
                
                



                <div className="secciones">
                    {console.log(acabado)}
                    {
                        arr.map((newTresMedicamentos) => {
                            if (acabado) {
                                return (
                                    <FilaEditarMedicamentos tresMedicamentos={newTresMedicamentos}/>
                                )
                            }

                        })
                    }
                    
                    

                </div>
                <div>
                    <button onClick={()=>navigate("Medicamentos",{???????????????}})}>Agregar Medicamento</button>
                </div>
               
            </div>

        </main>
    )
}
export default HistorialClinico;