// Función que recibe el evento onkeypress de la caja de texto y procesa solo números
function solonum(num) {
    tecla = num.keyCode;
    if (tecla >= 48 && tecla <= 57) {
      // console.log("numero");
    } else {
      //  console.log("Letra invalida");
      return false;
    }
  }
  //Función que recibe el contenido del cuadro de texto para validar el algoritmo de luhn 
  function suma_cadena() {
    let texto = document.getElementById("tdc").value;
    if (texto == "" || texto.length < 16) {
      alert("El Campo TDC esta incompleto");
      return;
    } else {
      let cantidadCaracteres = texto.length;
      console.log("Numero de caracteres " + cantidadCaracteres);
      console.log("Texto de la Cadena " + texto);
      let sum = 0;
      for (let i = cantidadCaracteres - 1; i >= 0; i--) {
        let ent = parseInt(texto.charAt(i));
        console.log("Entero inicial es " + ent);
        console.log("El indice es " + i);
        if (i % 2 == 0) {
            ent = ent * 2;
            console.log("Es par el indice, ent * 2 es igual a " + ent);

            if (ent > 9) {
                console.log("si ent es > que 9 entonces el valor es " + ent);
                ent = ent - 9;
                console.log("Ahora ent - 9 es igual a " + ent);
            }
        }

        sum = sum + ent;
        console.log(sum);
      }
      let residuo = sum % 10;
      console.log("El residuo es " + residuo);
      if (residuo == 0) {
        console.log("Tarjeta Valida");
        mascara();
      } else {
        console.log("Tarjeta InValida");
        mascara();
      }

    }
  }
//Función que enmascara los primeros 12 caracteres en "#" y conserva los 4 ultimos
function mascara(){
  
    let texto = document.getElementById("tdc").value;
    let mascara = "############"+ texto.substring(12);
    console.log("Este es el numero de tarjeta enmascarada "+ mascara);
    //document.write("Tu numero de tarjeta de credito termina en " + mascara);  
}


// import validator from './validator.js';

// console.log(validator);
