import Datos_de_cita from "../../Components/Datos de cita";
import Paginacion from "../../Components/Paginacion";

const Citas =(props)=>{
    return(
        <div>
            <div className="container"><h3>Citas: {props.nombre}</h3></div>
            
            <div className="container mt-4">
               <Datos_de_cita fecha="30/09/2022" especialidad="Traumatología" hora="10:00" doctor="Juan Perez" />
               <Datos_de_cita fecha="30/09/2022" especialidad="Traumatología" hora="10:00" doctor="Juan Perez" /> 

            </div>
            <Paginacion/>
        </div>
    )
 }
 export default Citas;