import validator from "./validator.js";

//Carga Inicial del Sitio Web
document.getElementById("contenedor1").style.display = "";
document.getElementById("contenedor2").style.display = "none";
document.getElementById("contenedor3").style.display = "none";


//Cambio de Pantalla Validar Datos
let capturar = () => {
  document.getElementById("contenedor1").style.display = "none";
  document.getElementById("contenedor2").style.display = "";
};
document.getElementById("inicio").addEventListener("click", capturar);


//Validacion F-isvalid y limpia los campos text cuando TDC es valida
let validacionDeTarjeta = () => {
  const creditCardNumber = document.getElementById('tdc').value 
  if (creditCardNumber === "" || creditCardNumber.length < 16) {
    alert("El Campo TDC esta incompleto");
  } else { 
  const validacion =  validator.isValid(creditCardNumber)
    if (validacion === true) {
    document.getElementById("contenedor2").style.display = "none";
    document.getElementById("contenedor3").style.display = "";
    document.getElementById("mensajeDeTarjeta").innerHTML = "¡Tu tarjeta numero " + validator.maskify(creditCardNumber) +
      " fue validada con éxito. Felicidades, ya puedes empezar a disfrutar de nuetro servicio!";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("tdc").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("cvc").value = "";
  }else{
    alert("Tarjeta de Crédito ingresada es Inválida");
  }
}
};
document.getElementById("validarTdc").addEventListener("click", validacionDeTarjeta, false);


//Retorna al Inicio
let volverPrincipio = () => {
  document.getElementById("contenedor1").style.display = "";
  document.getElementById("contenedor2").style.display = "none";
  document.getElementById("contenedor3").style.display = "none";
};
document.getElementById("retornar").addEventListener("click", volverPrincipio, false);




