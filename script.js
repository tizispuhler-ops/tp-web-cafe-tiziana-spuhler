
/* MENU HAMBURGUESA */

function abrirMenu() {

    document.getElementById("menuMobile").style.display = "flex";

}

function cerrarMenu() {

    document.getElementById("menuMobile").style.display = "none";

}


/* TIENDA */

/* PRODUCTOS DE LA TIENDA */

const productos = [
    { nombre: "Buda Durmiente", precio: 18000 },
    { nombre: "Buda Loto", precio: 12500 },
    { nombre: "Monje Soñador", precio: 9500 },
    { nombre: "Monje Bailarín", precio: 9500 },
    { nombre: "Buda Sonriente", precio: 14000 },
    { nombre: "Buda Meditador", precio: 16000 }
];


/* CANTIDADES DE LOS PRODUCTOS */

let cantidades = [0, 0, 0, 0, 0, 0];


/* AGREGAR PRODUCTOS AL CARRITO */

function agregarAlCarrito(indice) {

    cantidades[indice]++;

    mostrarCarrito();

    abrirCarrito();

}


/* QUITAR UNA UNIDAD DEL CARRITO */

function quitarDelCarrito(indice) {

    if (cantidades[indice] > 0) {

        cantidades[indice]--;

    }

    mostrarCarrito();

}


/* MOSTRAR PRODUCTOS Y CALCULAR TOTAL */

function mostrarCarrito() {

    let contenido = "";
    let total = 0;

    for (let i = 0; i < productos.length; i++) {

        if (cantidades[i] > 0) {

            let subtotal = productos[i].precio * cantidades[i];

            contenido = contenido +
                "<div class='carrito-producto'>" +
                "<p>" + productos[i].nombre + "</p>" +
                "<p>Cantidad: " + cantidades[i] + "</p>" +
                "<p>$" + subtotal.toLocaleString("es-AR") + "</p>" +
                "<button onclick='quitarDelCarrito(" + i + ")'>QUITAR UNO</button>" +
                "</div>";

            total = total + subtotal;

        }

    }

    if (contenido == "") {

        contenido = "<p>Todavía no agregaste productos.</p>";

    }

    document.getElementById("listaCarrito").innerHTML = contenido;

    document.getElementById("totalCarrito").innerHTML =
        "$" + total.toLocaleString("es-AR");

}


/* ABRIR EL CARRITO LATERAL */

function abrirCarrito() {

    document.getElementById("carrito").style.right = "0";

}


/* CERRAR EL CARRITO LATERAL */

function cerrarCarrito() {

    document.getElementById("carrito").style.right = "-100%";

}

