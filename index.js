//!SIMULADOR DE COMPRA
//! Muestra al cliente los productos disponibles.
//! Consulta al cliente cuantos productos va solicitar del efecto indicado
//!En base a la cantidad disponible en stock devuelve al cliente un msj.

//!VARIABLES-----------------------------------------------------

let empresa = "Kamui Camisetas";
let iva = 1.25;
let camisetaArgentina = 17000;
let camisetaBoca = 16000;
let camisetaRiver = 16000;
let camisetaReal = 20000;
let bucle = false;

//!CONSTANTES Y FUNCIONES----------------------------------------

function precioTotalCamisetas(camiseta, cantidad) {
	alert(`El precio total es: $${camiseta * cantidad}`);
}

//!CÓDIGO--------------------------------------------------------
let nombre = "Fernando Torres";

while (bucle === true) {
	let camiseta = prompt(`Que camiseta quieres comprar:
	1. Selección Argentina Titular -- $${camisetaArgentina},00
	2. Club Atlético Boca Juniors  -- $${camisetaBoca},00
	3. Club Atlético River Plate   -- $${camisetaRiver},00
	4. Real Madrid Futbol Club     -- $${camisetaReal},00
	5. Otros.`);
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
