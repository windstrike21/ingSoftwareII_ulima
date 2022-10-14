const formulario = document.querySelector("#Formulario");

formulario.addEventListener( "submit", validarForm )

function validarForm(e){
    e.preventDefault();
    const NHistoria = document.querySelector("#NHistoria").value
    const Apellidos = document.querySelector("#apellido").value
    const Nombres = document.querySelector("#nombre").value
    const Correo = document.querySelector("#correo").value
    const DNI = document.querySelector("#dni").value
    const NomPadre = document.querySelector("#nomPadre").value
    const Sexo = document.querySelector("#sexo").value
    const FechaNac = document.querySelector("#nacer").value
    const Seguro = document.querySelector("#seguro").value
    const Telefono = document.querySelector("#telefono").value
    const NomMadre = document.querySelector("#nomMadre").value

    const Distrito = document.querySelector("#distrito").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola, soy ${Nombres, Apellidos}. Mi numero es ${Telefono} y mis padres son ${NomMadre,NomPadre}. 
    Otros datos son ${Sexo,Correo,DNI,Seguro} mi num de historia es ${NHistoria}`
    console.log(respuesta)
}