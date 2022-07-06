/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string
    precio: number
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad air',
    precio: 350
}

const articulos: Producto[] = [telefono, tableta]

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0
    productos.forEach(({ precio }) => {
        total += precio
    })
    return [total, total * 0.15]
}

const [total, isv] = calculaISV(articulos)

console.log('El total es:', total)
console.log('El ISV(15%) es:', isv)