// Autor: Enrique Cuevas G.
const fs = require('fs')
const { registrar, leer} = require ('./operaciones.js')
const args = process.argv.slice(2); // Obtener argumentos de la línea de comandos
const operacion = args[0];

if (operacion === 'registrar') {
    const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
    registrar(nombre, edad, tipo, color, enfermedad);

} else if (operacion === 'leer') {
    leer();
    console.log('Operación "Leer Citas Realizadas"', leer());

} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}