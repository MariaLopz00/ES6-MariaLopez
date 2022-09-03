// Transformar todas las funciones declarativas en funciones flecha.
// Transformar las funciones en asíncronas con la palabra async .
// Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.
// Luego de realizar el método fetch, implemente el método ".json()" sobre los datos obtenidos.
// Implementar await sobre todos los procesos asíncronos como consultas a la base de datos, 
//conversión de formato json, etc.
// Selecconar las funciones retrasar , obtener Pcias ,
// obtener Dptos , obtener Localidades , luego cortarlas y pegarlas en el archivo 
//funciones-exportadas que se encuentra en la carpeta libs .
// Usando la palabra reservada export para exportar las funciones y 
//que pueden ser usadas desde el archivo app.js. Pueden exportarlas una por una o como un solo objeto.
// Implementar bloques try catch para el manejo de errores.


const retrasar =(milisegundos)=>{new Promise(resolve=>{setTimeout(resolve, milisegundos)})}

const  obtenerPcias = async ()=>{ 
    await retrasar(1800)

        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
        const objeto= await consulta.json()
     
return objeto
    
}
obtenerPcias()
.then(resultado=>console.log(resultado))



const retrasar1 = (milisegundos) => {
    new Promise(resolve => {
        setTimeout(resolve, milisegundos)
    })

}


const obtenerDptos = async () => {
await retrasar1 (1391)
const consulta1 = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos?campos=completo&max=1000`)
const departamentos= await consulta1.json()

return departamentos 
}
obtenerDptos()
.then(respuesta=>console.log(respuesta))


const retrasar2 = (milisegundos) => {
    new Promise(resolve => {
        setTimeout(resolve, milisegundos)
    })

}


const obtenerLocalidades = async () => {
    await retrasar2 (900);
    const consulta2 = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?campos=completo&max=5000`)
    const localidades1 = await consulta2.json()

    return localidades1
    
    }
    obtenerLocalidades()
    .then(respuesta1=>console.log(respuesta1))    

    const consultarDatos = () => {
        const provincias = obtenerPcias();
        const dptos = obtenerDptos();
        const localidades1 = obtenerLocalidades();
    
        console.log(provincias);
        console.log(dptos);
        console.log(localidades1);

    }
    consultarDatos();