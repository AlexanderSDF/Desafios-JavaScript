//! PROYECTO DE CARRITO PARA TIENDA DE NOTEBOOKS
//!-----------------------------VARIABLES Y CONSTANTES---------------------------------------------
let cantidadNotebooks = 0;
let eleccionNotebook = 0;
let acumulador = 0;
let carrito = [];
let notebookElegida = [];
let nuevoStockNotebook = [];
//!constructor de objetos
class Notebook {
	constructor(id, nombre, categoria, marca, color, precio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.categoria = categoria;
		this.marca = marca;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}
}
//!construcción de objetos
const producto1 = new Notebook(1,`Notebook 13'`,`Trabajo de Oficina`,`Lenovo`,`Plateado`,67000,10);
const producto2 = new Notebook(2, `Notebook 14'`, `Trabajo de Oficina`, `Asus`, `Negro`, 72000, 10);
const producto3 = new Notebook(3,`Notebook 15'`,`Trabajo Demandante`,`Huawei`,`Blanca`,95000,10);
const producto4 = new Notebook(4,`Notebook 13'`,`Trabajo Demandante`,`Macbook`,`Plateado`,230000,10);
const producto5 = new Notebook(5, `Notebook 14'`, `Gamer`, `Asus`, `Negro`, 280000,10);
const producto6 = new Notebook(6, `Notebook 14'`, `Gamer`, `Alienware`, `Blanco`, 300000, 10);
const notebooksDisponibles = [producto1, producto2, producto3, producto4, producto5, producto6];

//!-----------------------------CICLO DE ELECCION DEL PRODUCTO-------------------------------------
cicloEleccionNotebook();
function cicloEleccionNotebook() {
	while (eleccionNotebook != undefined) {
		eleccionNotebook = prompt(
			`Ingrese el número de artículo de la Notebook que desea comprar.
- 1: Lenovo Thinkpad 13' apta para trabajo de oficina. - $${producto1.precio} 
- 2: Asus Lite 14' apta trabajo de oficina. - $${producto2.precio}
- 3: Huawei z32 15' apta trabajo demandante. - $${producto3.precio}
- 4: Apple Air M1 13' apta trabajo demandante.  - $${producto4.precio}
- 5: Asus Rog 14' apta para gaming. - $${producto5.precio}
- 6: Alienware 14' apta para gaming. - $${producto6.precio}
- 0: Para SALIR.`
		);
		notebookElegida = notebooksDisponibles.find((notebook) => notebook.id == eleccionNotebook);
		//!Verifica que el articulo sea valido
		const verificacionArticulos = notebooksDisponibles.some(
			(notebook) => notebook.id == eleccionNotebook
		);
		if (verificacionArticulos == true) {
			alert(`El artículo es correcto.`);
		} else {
			alert(`Ingresó un artículo inexistente.`);
			break;
		}
		let cantidadNotebookCarrito = calcularTotal();
	}
}


//!-------------------------------------FUNCIONES------------------------------
//!Usuario Ingresa cantidad a comprar
function calcularTotal() {
	cantidadNotebooks = parseInt(prompt(`Ingrese la cantidad de notebooks que desea comprar.`));
	console.log(`Cantidad de Notebooks: ${cantidadNotebooks}`);
	console.log(`Stock de la notebook elegida: ${notebookElegida.stock}`);

	//!Se agrega al carrito la cantidad Seleccionada siempre que exista en Stock
	let agregarACarrito = agregarAlCarrito(notebookElegida);
	//!Se calcula el Total a abonar
	let subtotalPagar = carrito.reduce((suma, notebook) => suma + notebook.precio, 0);
	let totalPagar = subtotalPagar * cantidadNotebooks;
	alert(`La cantidad total a abonar es $${totalPagar},00`);

	//!Funcion para actualizar el stock disponible.
	restarAlStock(notebooksDisponibles, eleccionNotebook);
	console.table(notebooksDisponibles);
}
function agregarAlCarrito(pc) {
	if (cantidadNotebooks <= pc.stock) {
		carrito.push(pc);
	} else {
		alert(`No hay en Stock la cantidad ingresada, vuelva a intentarlo.`);
		cicloEleccionNotebook();
	}
	console.log(carrito);
}
function restarAlStock() {
	let nuevoStockNotebook = notebooksDisponibles.map((notebook) => {
		return {
			id: notebook.id,
			nombre: notebook.nombre,
			categoria: notebook.categoria,
			marca: notebook.marca,
			color: notebook.color,
			precio: notebook.precio,
			stock: notebook.stock - cantidadNotebooks,
		};
	});
	console.log(nuevoStockNotebook);
}
