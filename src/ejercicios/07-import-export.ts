/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [{
    desc: 'iPad air',
    precio: 350
},
{
    desc: 'Telefono 2',
    precio: 200
}]

const [total, isv]  = calculaISV( carritoCompras )

console.log('El total es:', total)
console.log('El ISV(15%) es:', isv)