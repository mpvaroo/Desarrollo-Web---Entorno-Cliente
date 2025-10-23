// 1) Definimos las clases base
class Empresa {
  constructor(nombre, direccion, telefono, NIF) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.NIF = NIF;
  }
}

class Cliente {
  constructor(numCliente, DNI, nombre, domicilio, cp, ciudad, provincia) {
    this.numCliente = numCliente;
    this.DNI = DNI;
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.cp = cp;
    this.ciudad = ciudad;
    this.provincia = provincia;
  }
}

class Producto {
  constructor(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

// 2) datosFactura usa empresa, cliente y productos
class DatosFactura {
  constructor(empresa, cliente, productos) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.productos = productos;
  }
}

// 3) Factura hereda de DatosFactura y añade formaPago y métodos
class Factura extends DatosFactura {
  constructor(empresa, cliente, productos, formaPago) {
    super(empresa, cliente, productos);
    this.formaPago = formaPago;
    this.importeTotal = 0;
  }

  calcularTotal() {
    this.importeTotal = this.productos.reduce(
      (acc, p) => acc + p.precio * p.cantidad,
      0
    );
  }

  mostrarTotal() {
    return `El importe total de la factura es: ${this.importeTotal} €`;
  }
}

// 4) Instanciamos objetos de ejemplo (datos inventados)
const empresa1 = new Empresa(
  "TecnoSoluciones S.L.",
  "C/ Mayor 45, Madrid",
  "912345678",
  "B12345678"
);

const cliente1 = new Cliente(
  "C001",
  "12345678Z",
  "Daniel Servián",
  "Av. Andalucía 12",
  "41008",
  "Sevilla",
  "Sevilla"
);

const productos1 = [
  new Producto("Monitor 24\"", 150, 2),
  new Producto("Teclado mecánico", 60, 1),
  new Producto("Ratón inalámbrico", 25, 2),
];

// 5) Creamos la factura, calculamos y pintamos
const factura1 = new Factura(empresa1, cliente1, productos1, "Tarjeta");
factura1.calcularTotal();

// --- Pintar en la página ---
document.getElementById("datos-empresa").textContent =
  `Empresa: ${factura1.empresa.nombre} | NIF: ${factura1.empresa.NIF} | ` +
  `${factura1.empresa.direccion} | Tel: ${factura1.empresa.telefono}`;

document.getElementById("datos-cliente").textContent =
  `Cliente: ${factura1.cliente.nombre} (Nº ${factura1.cliente.numCliente}, DNI ${factura1.cliente.DNI}) - ` +
  `${factura1.cliente.domicilio}, ${factura1.cliente.cp} ${factura1.cliente.ciudad} (${factura1.cliente.provincia})`;

document.getElementById("forma-pago").textContent =
  `Forma de pago: ${factura1.formaPago}`;

const tbody = document.getElementById("lineas");
factura1.productos.forEach(p => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${p.descripcion}</td>
    <td>${p.precio.toFixed(2)}</td>
    <td>${p.cantidad}</td>
    <td>${(p.precio * p.cantidad).toFixed(2)}</td>
  `;
  tbody.appendChild(tr);
});

document.getElementById("total").textContent = factura1.mostrarTotal();
