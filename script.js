let carrito = [];

function agregarAlCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    mostrarCarrito();
}

function mostrarCarrito() {

    let lista = document.getElementById("lista-carrito");
    let total = document.getElementById("total");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach(function(producto) {

        let elemento = document.createElement("li");

        elemento.textContent =
            producto.nombre + " - RD$ " + producto.precio;

        lista.appendChild(elemento);

        suma += producto.precio;
    });

    total.textContent = "Total: RD$ " + suma;
}

function vaciarCarrito() {

    carrito = [];

    mostrarCarrito();
}