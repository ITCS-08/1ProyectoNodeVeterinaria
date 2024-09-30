const fs = require('fs')


const registrar = (nombreAnimal, edad, TipoAnimal, ColorAnimal, enfermedad) => {

    const citas = leer(); // Leer citas existentes
    const nuevaCita = {
        nombreAnimal,
        edad,
        TipoAnimal,
        ColorAnimal,
        enfermedad,
    };
    citas.push(nuevaCita); // Agregar nueva cita
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2)); // Guardar citas en el archivo
    console.log('Nueva Cita registrada:', nuevaCita);  
}

const leer = () =>{
    
    if (!fs.existsSync('citas.json')) {
        fs.writeFileSync('citas.json', JSON.stringify([])); // Crear el archivo si no existe
        console.log('Archivo Creado');  
    }
    const data = fs.readFileSync('citas.json', 'utf8');
    return JSON.parse(data);
}


module.exports = { registrar, leer }
