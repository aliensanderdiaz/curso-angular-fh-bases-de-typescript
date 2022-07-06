/*
    ===== Código de TypeScript =====
*/

// class Heroe {
//     alterEgo: string
//     edad: number
//     nombreReal: string

//     constructor(alterEgo, edad, nombreReal) {
//         this.alterEgo = alterEgo
//         this.edad = edad
//         this.nombreReal = nombreReal
//     }


//     imprimirNombre() {
//         return this.alterEgo + ' ' + this.nombreReal
//     }
// }

// const ironman =  new Heroe('Ironman', 41, 'Tony')

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, 'New York, USA')
    }


    imprimirNombre() {
        return this.alterEgo + ' ' + this.nombreReal
    }
}

const ironman =  new Heroe('Ironman', 41, 'Tony')
console.log(ironman.imprimirNombre())