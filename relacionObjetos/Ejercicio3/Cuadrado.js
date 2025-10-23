class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  // Método para calcular el perímetro del cuadrado
  perimetro() {
    return this.lado * 4;
  }

  // Método para calcular el área del cuadrado
  area() {
    return this.lado * this.lado;
  }
}
