/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b
}

function multiplicar(numero: number, otroNumero?: number, base: number = 5): number {
    return numero * base
}

let resultado = sumar(4, 5)
resultado = multiplicar(5)
resultado = multiplicar(5, 4)
resultado = multiplicar(5, 4, 3)

console.log({ resultado })

interface PersonajeLOR {
    nombre: string
    pv: number
    mostrarHp: () => void
}

function curar (personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de Vida:', this.pv)
    }
}

curar(nuevoPersonaje, 5)

nuevoPersonaje.mostrarHp()