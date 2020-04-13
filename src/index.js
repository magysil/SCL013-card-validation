import validator from './validator.js';

document.getElementById("validar").addEventListener("click", validator.isValid, false);


document.getElementById("contenedor1").style.display = "";
document.getElementById("contenedor2").style.display = "none";






//aqui van todas las funciones que me permiten el cambio de pantalla 
let capturar = () => {

  document.getElementById("contenedor1").style.display = "none";
  document.getElementById("contenedor2").style.display = "";
 
}

document.getElementById("botonenviar").addEventListener("click", capturar , false);

