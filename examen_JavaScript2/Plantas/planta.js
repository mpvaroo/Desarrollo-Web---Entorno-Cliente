class Planta {

    constructor(nombre, tipo, riego) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.riego = riego;
    }


    informacion() {
          return `Planta: ${this.nombre} | Tipo: ${this.tipo} | Cuidados: ${this.riego}`;
    }
}

class Arbusto extends Planta {
  constructor(nombre, tipo, riego, altura) {
    super(nombre, tipo, riego);
    this.altura = altura;
  }

  // Sobrescribe el método información de Planta
  informacion() {
    return `Planta: ${this.nombre} | Tipo: ${this.tipo} | Cuidados: ${this.riego} | Altura: ${this.altura} cm`;
  }
}

class Arbol extends Planta {
  constructor(nombre, tipo, riego, edad) {
    super(nombre, tipo, riego);
    this.edad = edad;
  }

  // Sobrescribe el método información de Planta
  informacion() {
    return `Planta: ${this.nombre} | Tipo: ${this.tipo} | Cuidados: ${this.riego} | Edad: ${this.edad} años`;
  }
}

//Instanciamos Objetos
const planta1 = new Planta(
  "Rosa",
  "Flor",
  "Riego recomendado cada 3 dias"
);

const arbusto1 = new Arbusto(
  "Arbustazo",
  "Arbusto",
  "Riego recomendado cada 7 dias",
  "185"
);

const arbol1 = new Arbol(
  "Pino",
  "Arboleda",
  "Riego recomendado cada 5 dias",
  "50"
);

alert(planta1.informacion());
alert(arbusto1.informacion());
alert(arbol1.informacion());



