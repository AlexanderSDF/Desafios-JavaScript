//!--------------------------PROYECTO TIENDA----------------------------------------------
//Creo la clase Producto, con las propiedades id, nombre, precio y cantidad:
class Producto {
	constructor(id, marca, modelo, categoria, pantalla, color, precio, disponible) {
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.categoria = categoria;
		this.pantalla = pantalla;
		this.color = color;
		this.precio = precio;
		this.disponible = disponible;
		this.compra = 1;
	}
}
//Creo productos y los almaceno en un array:
const producto1 = new Producto(1, "Lenovo", "Thinkpad", "Office", "13'", "Plateado", 20000.50, 5);
const producto2 = new Producto(2, "Msi", "Prestige", "Office", "15.6'", "Blanco", 30000.50, 5);
const producto3 = new Producto(3, "Huawei", "MateBook", "Office", "15'", "Negro", 40000.50, 5);
const producto4 = new Producto(4, "Apple", "Air M1", "HardWork", "15'", "Plateado", 80000.50, 5);
const producto5 = new Producto(5, "Asus", "X515", "HardWork", "14'", "Negro", 100000.50, 5);
const producto6 = new Producto(6, "Alienware", "X15", "Gaming", "14'", "Blanco", 150000.50, 5);
const producto7 = new Producto(7, "Msi", "Pulse", "Gaming", "17'", "Negro", 290000.50, 5);
const producto8 = new Producto(8, "Asus", "Rog Z96", "Gaming", "15'", "Plateado", 315000.50, 5);
const productos = [ producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

//Muestra el carrito y modifica el DOM
const contenedorProductos = document.getElementById("contenedorProductos");

productos.forEach((producto) => {
	const divProducto = document.createElement("div");
	divProducto.classList.add("card", "col-xl-3", "col-md-6", "col-sm-12");
	divProducto.innerHTML = `
                            <div>
                                <img src="./images/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title"> ${producto.marca} ${producto.modelo} ${producto.pantalla}</h3>
                                    <p class="card-text"> $ ${producto.precio.toFixed(2)} </p>
									<p class="card-text-stock"> En Stock: ${producto.disponible} </p>
                                    <button id="botón${producto.id}" class="btn btn-dark"> Agregar al Carrito </button>
                                </div>
                            </div>`;
	contenedorProductos.appendChild(divProducto);

	//Agregar un evento al botón de agregar al carrito:
	const boton = document.getElementById(`botón${producto.id}`);
	boton.addEventListener("click", () => {
		agregarAlCarrito(producto.id);
	});
});

//Creo el carrito de compras
const carrito = [];

//función que busque el producto por id y lo agregue al carrito.
const agregarAlCarrito = (id) => {
	const producto = productos.find((producto) => producto.id === id);
	const productoEnCarrito = carrito.find((producto) => producto.id === id);
	if (productoEnCarrito) {
		productoEnCarrito.compra++;
	} else {
		carrito.push(producto);
	}
	actualizarCarrito();
};


//todo Verificar cantidad en stock
function verificarDisponible(producto) {
	if (compra <= producto.disponible) {
	console.log(`La cantidad de notebooks compradas es de: ${compra}`);
	} else {
		alert(`No hay en Stock la cantidad ingresada, vuelva a intentarlo.`);
		actualizarCarrito();
	}
}

//Muestro el carrito de compras modificando el DOM.

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", actualizarCarrito);

function actualizarCarrito() {
	let aux = "";
	carrito.forEach((producto) => {
		aux += `
                <div class="card col-xl-3 col-md-6 col-sm-12">
                    <img src="../images/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                    <div class="card-body">
                        <h3 class="card-title"> ${producto.marca} </h3>
                        <p class="card-text"> $ ${producto.precio.toFixed(2)} </p>
                        <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                    </div>
                </div>
                `;
	});
	contenedorCarrito.innerHTML = aux;
	calcularTotalCompra();
}

//Agrego una función que elimine el producto del carrito:

const eliminarDelCarrito = (id) => {
	const producto = carrito.find((producto) => producto.id === id);
	carrito.splice(carrito.indexOf(producto), 1);
	actualizarCarrito();
};

//Función para vaciar todo el carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
	carrito.splice(0, carrito.length);
	actualizarCarrito();
});

//Función que calcula el total del carrito:

const totalCompra = document.getElementById("totalCompra");

const calcularTotalCompra = () => {
	let total = 0;
	carrito.forEach((producto) => {
		total += producto.precio * producto.compra;
	});
	totalCompra.innerHTML = total.toFixed(2);
};
