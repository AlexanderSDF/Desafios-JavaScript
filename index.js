//!SIMULADOR DE COMPRA
//! Muestra al cliente los productos disponibles.
//! Consulta al cliente cuantos productos va solicitar del efecto indicado 
//!En base a la cantidad disponible en stock devuelve al cliente un msj.

//!VARIABLES-----------------------------------------------------
let empresa = "Kamui Camisetas"
let disp1 = 30 /* camiseta ArgTit */
let disp2 = 20 /* camiseta ArgSup */
let disp3 = 50 /* camiseta BocTit */
let disp4 = 50 /* camiseta RivTit */
let disp5 = 10 /* camiseta RemTit */
let camiseta1 = "Camiseta titular de Argentina" 
let camiseta2 = "Camiseta suplente de Argentina" 
let camiseta3 = "Camiseta titular de Boca Juniors"
let camiseta4 = "Camiseta titular de River Plate" 
let camiseta5 = "Camiseta titular de Real Madrid" 


//!CONSTANTES Y FUNCIONES----------------------------------------
function suma(num1, num2) {
  resultado = num1 + num2; 
  return resultado;
}
function resta(num1, num2) {
  resultado = num1 - num2; 
  return resultado;
}
function multiplicación(num1, num2) {
  resultado = num1 * num2; 
  return resultado;
}
function suma(num1, num2) {
  resultado = num1 / num2; 
  return resultado;
}
//!CÓDIGO--------------------------------------------------------
let nombre = "Fernando Torres"
alert(`Buen dia ${nombre}`)
let opcion = prompt(`Bienvenido ${nombre}
  Ingrese la opción que desea comprar:
  1: Camiseta Titular de Argentina
  2: Camiseta Suplente de Argentina
  3: Camiseta Titular de Boca Juniors
  4: Camiseta Titular de River Plate
  5: Camiseta Titular de Real Madrid
  6: Otro
  N: Para salir.
`)
while (opcion.toLowerCase() !="N"){
  switch (opcion.toLowerCase()) {
    case "1":
      prompt(`Usted ha seleccionado la opcion ${camiseta1}`);
      break;
    case "2":
      prompt(`Usted ha seleccionado la opcion ${camiseta2}`);
      break;
    case "3":
      prompt(`Usted ha seleccionado la opcion ${camiseta3}`);
      break;
    case "4":
      prompt(`Usted ha seleccionado la opcion ${camiseta4}`);
      break;
    case "5":
      prompt(`Usted ha seleccionado la opcion ${camiseta5}`);
      break;
    case "6":
      prompt(`Disculpe ${nombre}, por el momento no contamos con otras camisetas para seleccionar.`)
    case "N":
      prompt(`${nombre}, gracias por consultar nuestros productos, En ${empresa} estamos para servirle.`);
      break;
      default:
      alert(`La opción seleccionada no esta contemplada`);
      break;
  }
  opcion = prompt(`Bienvenido ${nombre} 
  Ingrese la opción que desea comprar:
  1: Camiseta Titular de Argentina
  2: Camiseta Suplente de Argentina
  3: Camiseta Titular de Boca Juniors
  4: Camiseta Titular de River Plate
  5: Camiseta Titular de Real Madrid
  6: Otro
  N: Para salir.
  `)
}