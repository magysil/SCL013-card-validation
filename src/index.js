import validator from './validator.js';

document.getElementById("validar").addEventListener("click", validator.isValid, false);

document.getElementById("contenedor1").style.display = "";
document.getElementById("contenedor2").style.display = "none";
document.getElementById("contenedor3").style.display = "none"




//aqui van todas las funciones que me permiten el cambio de pantalla 
let capturar = () => {

  document.getElementById("contenedor1").style.display = "none";
  document.getElementById("contenedor2").style.display = "";
 
}

document.getElementById("botonenviar").addEventListener("click", capturar , false);

let validacionDeTarjeta = () => {

  let validacion= validator.isValid()
  if (validacion==true) {
    document.getElementById("contenedor2").style.display = "none";
    document.getElementById("contenedor3").style.display = "";


    document.getElementById("mensajeDeTarjeta").innerHTML =
    "¡Tu tarjeta numero " + validator.maskify() + "fue validada con éxito. Felicidades, ya puedes empezar a disfrutar de nuetro servicio!";

    
  }
}

document.getElementById("validar").addEventListener("click", validacionDeTarjeta , false)

let volverPrincipio = () => {
  document.getElementById("contenedor1").style.display = "";
  document.getElementById("contenedor2").style.display = "none";
  document.getElementById("contenedor3").style.display = "none"
  
}

document.getElementById("botonenvi").addEventListener("click", volverPrincipio , false)





