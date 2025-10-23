class Cubo extends Cuadrado {
  constructor(lado) {
    super(lado); // Llama al constructor de Cuadrado
  }

  // Método para calcular el perímetro del cubo
  perimetro() {
    // Un cubo tiene 12 aristas del mismo largo
    return this.lado * 12;
  }

  // Método para calcular el área del cubo
  area() {
    // 6 veces el área de una de sus caras (cada cara es un cuadrado)
    return 6 * super.area();
  }

  // Método para calcular el volumen del cubo
  volumen() {
    // largo * ancho * alto (los tres son iguales al lado)
    return this.lado ** 3;
  }
}
