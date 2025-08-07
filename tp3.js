//EJERCICIO 1: PRECIO TOTAL
let precio = 300;
let iva = 21;

let total = precio + (precio * iva / 100);

console.log("Precio del producto: $" + precio);
console.log("IVA (" + iva + "%): $" + (precio * iva / 100).toFixed(2));
console.log("Precio total a pagar: $" + total.toFixed(2));

document.getElementById("resultado").textContent =
    "Total a pagar: $" + total.toFixed(2);


//EJERCICIO 2: AREA Y PERIMETRO DEL CUADRADO
// Lado del cuadrado
    let lado = 7;

// Cálculos
    let area = lado * lado;
    let perimetro = lado * 4;

// Mostrar resultados
    console.log("Lado del cuadrado:", lado);
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);

    document.getElementById("resultado").innerHTML =
        "Lado = " + lado + "<br>" +
        "Área = " + area + "<br>" +
        "Perímetro = " + perimetro;

//EJERCICIO 3: SALUDO
let nombre = prompt("Escribe tu nombre");
alert("Hola " + nombre);

//EJERCICIO 4: PROMEDIO DE 3 NÚMEROS
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

let promedio = (num1 + num2 + num3) / 3;

alert("El promedio es: " + promedio);

//EJERCICIO 5: CONSUMO DE COMBUSTIBLE
let litros = parseFloat(prompt("Ingresa los litros de nafta consumidos:"));
let kilometros = parseFloat(prompt("Ingresa los kilómetros recorridos:"));

let consumoPorKm = litros / kilometros;

alert("El consumo por kilómetro es: " + consumoPorKm.toFixed(2) + " Litros por kilómetro");

//EJERCICIO 6: FICHA
class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = [];
        this.numsesiones = 0;
    }

    anotar(km) {
        this.sesiones.push(km);
        this.numsesiones++;
    }

    media() {
        if (this.numsesiones === 0) return 0;
        let total = this.sesiones.reduce((acum, valor) => acum + valor, 0);
        return total / this.numsesiones;
    }
}

let nombre = prompt("Ingrese su nombre:");
let ficha1 = new Ficha(nombre);


let cantidad = parseInt(prompt("¿Cuántas sesiones va a registrar?"));

for (let i = 1; i <= cantidad; i++) {
    let km = parseFloat(prompt(`Ingrese el numero de kilómetros recorridos en cada sesión ${i}:`));
    ficha1.anotar(km);
}

let promedio = ficha1.media().toFixed(2);

alert(`El promedio de kilometros recorridos por ${ficha1.nombre} es: ${promedio} km.`);

document.getElementById("resultado").innerHTML =
`<p><u>Ficha de Ejercicio de:</u></p>
    <p><strong>Nombre:</strong> ${ficha1.nombre}</p>
    <p><strong>Sesiones registradas:</strong> ${ficha1.numsesiones}</p>
    <p><strong>Sesiones (km):</strong> ${ficha1.sesiones.join(", ")}</p>
    <p><strong>Promedio de km recorridos:</strong> ${promedio} km</p>`;

//EJERCICIO 7: FACTURAS A CLIENTES
//Clase Cliente
class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

//Clase Factura
class Factura {
    constructor(idCliente, total) {
        this.idCliente = idCliente;
        this.total = total;
        this.estado = "pendiente";
    }

    cobrar() {
        this.estado = "pagada";
    }

    imprimir(clientes) {
        let cliente = clientes[this.idCliente];
        return `
            <p><strong>Cliente:</strong> ${cliente.nombre}</p>
            <p><strong>Email:</strong> ${cliente.email}</p>
            <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
            <p><strong>Total:</strong> $${this.total}</p>
            <p><strong>Estado:</strong> ${this.estado}</p>
            <hr>
        `;
    }
}

let clientes = [
    new Cliente("NOELIA HESSLING", "noeliah@gmail.com", "387484555"),
    new Cliente("ANDREA HESSLING", "andreah@gmail.com", "3874148833"),
    new Cliente("DAVID HESSLING", "davidh@gmail.com", "3874830250")
];

//factura
let factura1 = new Factura(0, 8500);

//Cobrar la factura
factura1.cobrar();

//Mostrar en HTML
document.getElementById("resultado").innerHTML = factura1.imprimir(clientes);


//EJERCICIO 8: ARTICULO Y PROVEEDOR
//Clase Proveedor
class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

//Clase Articulo
class Articulo {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }

    telefono() {
        return {
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono
        };
    }
}

//proveedor
let proveedor1 = new Proveedor("FRAVEGA", "fravega_salta@gmail.com", "3874830251");

//artículo
let articulo1 = new Articulo("NOTEBOOK NOBLEX", 88000, proveedor1);

//datos del proveedor
let contacto = articulo1.telefono();

document.getElementById("resultado").innerHTML = `
    <p><strong>Articulo:</strong> ${articulo1.nombre}</p>
    <p><strong>Precio:</strong> $${articulo1.precio}</p>
    <p><strong>Proveedor:</strong> ${articulo1.proveedor.nombre}</p>
    <p><strong>Email:</strong> ${articulo1.proveedor.email}</p>
    <p><strong>Teléfono:</strong> ${contacto.telefono}</p>`;


//EJERCICIO 9: HOLA MUNDO JS 
function cambiar()
{document.getElementById("titulo").innerHTML = "Hola Mundo con Javascript";}


//EJERCICIO 10: CAMBIAR COLOR Y CENTRAR
function cambiar() {
  const titulo = document.getElementById("titulo");
  titulo.style.color = "red";
  titulo.style.textAlign = "center";}

//EJERCICIO 11:
function creaDiv() {const nuevoDiv = document.createElement("div");

  nuevoDiv.textContent = "Javascript permite crear paginas dinamicas";
  nuevoDiv.style.backgroundColor = "red";
  nuevoDiv.style.color = "white";
  nuevoDiv.style.textAlign = "center";
  nuevoDiv.style.padding = "10px";
  nuevoDiv.style.marginTop = "10px";

  document.getElementById("contenedor").appendChild(nuevoDiv);}