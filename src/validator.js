const validator = {
  
  isValid:()=> {
    let texto = document.getElementById("tdc").value;
    if (texto == "" || texto.length < 16) {
      // alert("El Campo TDC esta incompleto");
      return texto;
    } else {
      let cantidadCaracteres = texto.length;
      console.log("Numero de caracteres " + cantidadCaracteres);
      console.log("Texto de la Cadena " + texto);
      let sum = 0;
      for (let i = cantidadCaracteres - 1; i >= 0; i--) {
        let ent = parseInt(texto.charAt(i));
        console.log("Entero inicial es " + ent);
        if (i % 2 == 0) {
          ent = ent * 2;
        }
        console.log("El indice es " + i);
        console.log("Si es par este es el valor del entero " + ent);
        if (ent > 9) {
          ent = ent - 9;
        }
        console.log("si es + que 9 en tonces el valor es " + ent);
        sum = sum + ent;
        console.log(sum);
      }
      let residuo = sum % 10;
      console.log("El residuo es " + residuo);
      if (residuo == 0) {
        console.log("Tarjeta Valida");
        return true;
      } else console.log("Tarjeta InValida");
    }
  },
 
  maskify:()=>{
  
    let texto = document.getElementById("tdc").value;
    if (texto == "" || texto.length < 16) {
      alert("El Campo TDC esta incompleto");
      return;
    } else {
    let mascara = "############"+ texto.substring(12);
    console.log("Este es el numero de tarjeta enmascarada "+ mascara);
    document.write("Tu numero de tarjeta de credito termina en " + mascara);
    }
  
  },

};

export default validator;