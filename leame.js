/*Copiar las funciones en un archivo JavaScript.
Simplificar la composición de las cuerdas.
Simplificar la escritura de los objetos literales.
Transformar las funciones basicas en funciones flecha.
Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes)
y subir las soluciones a Github a través de la consola o GitHub Desktop.*/

// Mostrar el resultado por consola saludar('Alejandro');
const saludar= nombre => `hola ${nombre}`;
console.log(saludar('Alejandro'))

//======================================================

// Mostrar el resultado por consola multiplicar(3, 15)
const multiplicar=(a, b)=>`el resultado es: ${a*b}`;
console.log(multiplicar(3,15));

//======================================================

// Mostrar el resultado por consola.
const crearAlumno=(nombre, apellido, edad, materias)=>{
    let alumno = {nombre,apellido,edad,materias}
    return alumno
}
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))

//======================================================


// Mostrar el resultado por consola. devolverFecha('10','09','2022');
const devolverFecha=(fecha)=> `La fecha de hoy es: ${fecha}`
console.log(devolverFecha('10-09-2022'))
