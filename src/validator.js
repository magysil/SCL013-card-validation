const validator = {
  //Función para generar la mascara
  maskify: function (e) {
    let aux = e.length;
    let gato = "";
    for (let i = 0; i < aux - 4; i++) {
      gato = gato + "#";
      //console.log(gato.length);
      //console.log(gato);
    }
    let visible = e.substring(e.length - 4);
    let mascara = gato + visible;
    //console.log("Este es el numero de tarjeta enmascarada " + mascara);
    return mascara;
  },
  //Función de algoritmo de validación de tarjeta de Crédito
  isValid: function (e) {
    let cantidadCaracteres = e.length;
    // console.log("Numero de caracteres " + cantidadCaracteres);
    // console.log("Texto de la Cadena " + e);
    let sum = 0;
    for (let i = cantidadCaracteres - 1; i >= 0; i--) {
      let ent = parseInt(e.charAt(i));
      // console.log("Entero inicial es " + ent);
      // console.log("El indice es " + i);
      if (i % 2 == 0) {
        ent = ent * 2;
        //console.log("Es par el indice, ent * 2 es igual a " + ent);
        if (ent > 9) {
          // console.log("si ent es > que 9 entonces el valor es " + ent);
          ent = ent - 9;
          // console.log("Ahora ent - 9 es igual a " + ent);
        }
      }
      sum = sum + ent;
      // console.log(sum);
    }
    let residuo = sum % 10;
    // console.log("El residuo es " + residuo);
    if (residuo == 0) {
      // console.log("Tarjeta Valida");
      return true;
    } else {
      // alert("Tarjeta de Crédito ingresada es Inválida");
      // console.log("Tarjeta InValida");
      return false;
    }
  },
};
export default validator;