import validator from './validator.js';
/* validator.isValid();
if(validator.isValid()==true){
alert("TDC Valida");
} */
if(validator==true){
  alert("TArjeta Good")
}else{
  alert("Tarjeta BAd")
}
validator.maskify();



import * as modulos from './validator.js';

console.log(modulos.default.maskify);
console.log(modulos.default.isValid);




/* soloNumeros:(num)=> {
  tecla = num.keyCode;
  if (tecla >= 48 && tecla <= 57) {
   
  } else {
    
    return false;
  }
} */

/* function soloNumeros(num) {
  tecla = num.keyCode;
  if (tecla >= 48 && tecla <= 57) {
    // console.log("numero");
  } else {
    //  console.log("Letra invalida");
    return false;
  }
} */



/* let texto = document.getElementById("tdc").value;
if (texto == "" || texto.length < 16) {
  alert("El Campo TDC esta incompleto");
  return;
} */