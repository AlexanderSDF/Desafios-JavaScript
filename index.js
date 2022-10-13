// //!SIMULADOR DE COMPRA
// //! Muestra al cliente los productos disponibles.
// //! Consulta al cliente cuantos productos va solicitar del efecto indicado
// //!En base a la cantidad disponible en stock devuelve al cliente un msj.

// //!VARIABLES-----------------------------------------------------

// let empresa = "Kamui Camisetas";
// let iva = 1.21;
// let camisetaArgentina = 12000;
// let camisetaBoca = 8000;
// let camisetaRiver = 8000;
// let camisetaReal = 16000;
// let bucle = true;

// //!CONSTANTES Y FUNCIONES----------------------------------------

// function precioTotalCamisetas(camiseta, cantidad, iva) {
// 	alert(`El precio total es: $${camiseta * cantidad * iva},00`);
// }

// //!CÓDIGO--------------------------------------------------------
// let nombre = "Fernando Torres";

// while (bucle === true) {
// 	let opcion = prompt(`Que camiseta quieres comprar:
// 1. Selección Argentina Titular -- $${camisetaArgentina},00
// 2. Club Atlético Boca Juniors  -- $${camisetaBoca},00
// 3. Club Atlético River Plate   -- $${camisetaRiver},00
// 4. Real Madrid Futbol Club     -- $${camisetaReal},00
// 5. Otros.`);
// 	if (opcion == 1) {
// 		alert(`Usted ha seleccionado la camiseta`);
// 		let cantidad = prompt(`Ingrese la cantidad de camisetas a comprar.`);
// 		precioTotalCamisetas(camisetaArgentina, cantidad, iva);
// 	} else if (opcion == 2) {
// 		alert(`Usted ha seleccionado la camiseta2`);
// 	} else if (opcion == 3) {
// 		alert(`Usted ha seleccionado la camiseta3`);
// 	} else if (opcion == 4) {
// 		alert(`Usted ha seleccionado la camiseta4`);
// 	} else if (opcion == 5) {
// 		alert(`Usted ha seleccionado la camiseta5`);
// 	} else {
// 		alert(`Esta opcion no esta contemplada`);
// 	}
// }


//!VARIABLES---------------------------------------------------
let iva = 1.21;
let camisetaArgentina = 12000;
let camisetaBoca = 8000;
let camisetaRiver = 8000;
let camisetaReal = 16000;

let resArgentina = 0;
let resBoca = 0;
let resRiver = 0;
let resRealM= 0;
let bucle = true;
//!FUNCIÓN------------------------------------------------------
function precioFinal(resArgentina, resBoca, resRiver, resRealM) {
  alert(`El precio total seria: $${resArgentina + resBoca + resRiver + resRealM},00`)
}
//!CÓDIGO--------------------------------------------------------
while(bucle === true) {
  let producto = prompt(`Que camiseta quieres comprar:
1. Selección Argentina Titular   $${camisetaArgentina},00
2. Club Atlético Boca Juniors      $${camisetaBoca},00
3. Club Atlético River Plate         $${camisetaRiver},00
4. Real Madrid Futbol Club       $${camisetaReal},00
5. Otros
6. Salir.`).toLowerCase();
  
  if (producto === "1") {
    cantidad = parseFloat(prompt(`Cuantas camisetas de la selección vas a llevar?`));
		resArgentina = (cantidad * camisetaArgentina) * iva;
    console.log(`Tu compra de camisetas saldría: $${resArgentina},00`);
    alert(`Tu compra de camisetas saldría: $${resArgentina},00`);
    bucle = confirm(`Quieres seguir comprando?`);
  }
  else if(producto === "2") {
    cantidad = parseFloat(prompt(`Cuantas camisetas de Boca vas a llevar?`));
    resBoca = (cantidad * camisetaBoca) * iva;
    console.log(`Tu compra de camisetas saldría: $${resBoca},00`);
    alert(`Tu compra de camisetas saldría: $${resBoca},00`);
    bucle = confirm(`Quieres seguir comprando?`);
  }
  else if(producto === "3") {
    cantidad = parseFloat(prompt(`Cuantas camisetas de River vas a llevar?`));
    resRiver = (cantidad * camisetaRiver) * iva;
    console.log(`Tu compra de camisetas saldría: $${resRiver},00`);
    alert(`Tu compra de camisetas saldría: $${resRiver},00`);
    bucle = confirm(`Quieres seguir comprando?`);
  }
	else if(producto === "4") {
		cantidad = parseFloat(prompt(`Cuantas camisetas de Real Madrid vas a llevar?`));
		resRealM = (cantidad * camisetaReal) * iva;
		console.log(`Tu compra de camisetas saldría: $${resRealM},00`);
		alert(`Tu compra de camisetas saldría: $${resRealM},00`);
		bucle = confirm(`Quieres seguir comprando?`);
	}
	else if(producto === "5") {
		console.log(`Disculpe actualmente no contamos con otras camisetas`);
		bucle = confirm(`Quieres seguir comprando?`);
	}
	else if(producto === "6") {
		console.log(`Gracias por ver nuestros productos`);
		bucle = false
	}
  else{
    alert(`La opcion que escribiste no esta contemplada.`)
		bucle = confirm(`Quieres seguir?`);
  }
}
let final = confirm(`Quiere el precio final?`)
precioFinal(resArgentina, resBoca, resRiver, resRealM)
