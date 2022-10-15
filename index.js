//!VARIABLES---------------------------------------------------
let iva = 1.21;
let camisetaArgentina = 12000;
let camisetaBoca = 8000;
let camisetaRiver = 7500;
let camisetaReal = 16000;

let resArgentina = 0;
let resBoca = 0;
let resRiver = 0;
let resRealM = 0;
let bucle = true;
//!FUNCIÓN------------------------------------------------------
function precioFinal(resArgentina, resBoca, resRiver, resRealM) {
	alert(`El precio total seria: $${resArgentina + resBoca + resRiver + resRealM},00`);
}
//!CÓDIGO--------------------------------------------------------
while (bucle === true) {
	let producto = prompt(`Que camiseta quieres comprar:
1. Selección Argentina Titular   $${camisetaArgentina},00
2. Club Atlético Boca Juniors      $${camisetaBoca},00
3. Club Atlético River Plate         $${camisetaRiver},00
4. Real Madrid Futbol Club       $${camisetaReal},00
5. Otros
6. Salir.`).toLowerCase();

	if (producto === "1") {
		cantidad = parseFloat(prompt(`Cuantas camisetas de la selección vas a llevar?`));
		resArgentina = cantidad * camisetaArgentina * iva;
		console.log(`Tu compra de camisetas saldría: $${resArgentina},00`);
		alert(`Tu compra de camisetas saldría: $${resArgentina},00`);
		bucle = confirm(`Quieres seguir comprando?`);
	} else if (producto === "2") {
		cantidad = parseFloat(prompt(`Cuantas camisetas de Boca vas a llevar?`));
		resBoca = cantidad * camisetaBoca * iva;
		console.log(`Tu compra de camisetas saldría: $${resBoca},00`);
		alert(`Tu compra de camisetas saldría: $${resBoca},00`);
		bucle = confirm(`Quieres seguir comprando?`);
	} else if (producto === "3") {
		cantidad = parseFloat(prompt(`Cuantas camisetas de River vas a llevar?`));
		resRiver = cantidad * camisetaRiver * iva;
		console.log(`Tu compra de camisetas saldría: $${resRiver},00`);
		alert(`Tu compra de camisetas saldría: $${resRiver},00`);
		bucle = confirm(`Quieres seguir comprando?`);
	} else if (producto === "4") {
		cantidad = parseFloat(prompt(`Cuantas camisetas de Real Madrid vas a llevar?`));
		resRealM = cantidad * camisetaReal * iva;
		console.log(`Tu compra de camisetas saldría: $${resRealM},00`);
		alert(`Tu compra de camisetas saldría: $${resRealM},00`);
		bucle = confirm(`Quieres seguir comprando?`);
	} else if (producto === "5") {
		console.log(`Disculpe actualmente no contamos con otras camisetas`);
		bucle = confirm(`Quieres seguir comprando?`);
	} else if (producto === "6") {
		console.log(`Gracias por ver nuestros productos`);
		bucle = false;
	} else {
		alert(`La opcion que escribiste no esta contemplada.`);
		bucle = confirm(`Quieres seguir?`);
	}
}
let final = confirm(`Quiere el precio final?`);
precioFinal(resArgentina, resBoca, resRiver, resRealM);
