class Carta {

    constructor(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }


    nombreCarta() {
        const nombresPalos = ["corazones", "diamantes", "picas", "treboles"];
        const nombresValores = [
            "as", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K"
        ];

        const nombrePalo = nombresPalos[this.palo - 1];
        const nombreValor = nombresValores[this.valor - 1];

        return `${nombreValor} de ${nombrePalo}`;
    }
}

// Ejemplos del enunciado:
const carta1 = new Carta(1, 1);  // 1->palo corazones, 1->as
alert(carta1.nombreCarta()); // "as de corazones"

const carta2 = new Carta(2, 1);  // 2->diamantes, 1->as
alert(carta2.nombreCarta()); // "as de diamantes"

// Alguna carta más:
const carta3 = new Carta(3, 13); // K de picas
alert(carta3.nombreCarta()); // "K de picas"