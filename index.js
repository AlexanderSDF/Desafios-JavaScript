//!SIMULADOR DE COMPRA
//! Muestra al cliente los productos disponibles.
//! Consulta al cliente cuantos productos va solicitar del efecto indicado
//!En base a la cantidad disponible en stock devuelve al cliente un msj.

//!VARIABLES-----------------------------------------------------
let empresa = "Kamui Camisetas";
let disp1 = 30; /* camiseta ArgTit */
let disp2 = 20; /* camiseta ArgSup */
let disp3 = 50; /* camiseta BocTit */
let disp4 = 50; /* camiseta RivTit */
let disp5 = 10; /* camiseta RemTit */
let camiseta1 = "titular de Argentina";
let camiseta2 = "suplente de Argentina";
let camiseta3 = "titular de Boca Juniors";
let camiseta4 = "titular de River Plate";
let camiseta5 = "titular de Real Madrid";

//!CONSTANTES Y FUNCIONES----------------------------------------
function resta(num1, num2) {
	nuevoDisp = num1 - num2;
	return nuevoDisp;
}

//!CÓDIGO--------------------------------------------------------
let nombre = "Fernando Torres";

let opcion = 2;

while (opcion) {
	if (opcion == 1) {
		alert(`Usted ha seleccionado la camiseta`);
	} else if (opcion == 2) {
		alert(`Usted ha seleccionado la camiseta2`);
	} else if (opcion == 3) {
		alert(`Usted ha seleccionado la camiseta3`);
	} else if (opcion == 4) {
		alert(`Usted ha seleccionado la camiseta4`);
	} else if (opcion == 5) {
		alert(`Usted ha seleccionado la camiseta5`);
	} else {
		alert(`Esta opcion no esta contemplada`);
	}
}
