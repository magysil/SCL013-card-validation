const validator = {

  maskify : function () {

      let texto = document.getElementById("tdc").value;
      let mascara = "############"+ texto.substring(12);
      //let mascara = maskify(texto);
      console.log("Este es el numero de tarjeta enmascarada "+ mascara);
      //document.write("Tu numero de tarjeta de credito termina en " + mascara);  
      return mascara;
  },
  
  isValid : function () {
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
          validator.maskify();
          return true;
        } else {
          console.log("Tarjeta InValida");
          validator.maskify();
          return false;
        }
  
      }
    }

};

export default validator;