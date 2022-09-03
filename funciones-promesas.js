/*Transformar todas las funciones declarativas en funciones flecha.
Implemente los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.
Simplificar el código de las funciones.
Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await .*/


// Promesa almacenada en una constante

    const promesa = new Promise((resolve, reject)=>{
        ( 10 === 10)
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
    });

    promesa
        .then(respuesta=>console.log(respuesta))
        .catch(err=> console.log(err))


// Promesa dentro en una función.
    const promesaDos= (provincia)=>{
            const promesa = new Promise( (resolve, reject)=> {
        
                ('Formosa' === provincia)
                    ? resolve('Usted está ubicado en Formosa')
                    : reject('Error al realizar la consulta')
                });
                
                return promesa;
    }
    
    promesaDos('Formosa')
    .then(respuesta=>console.log(respuesta))
    .catch(err=> console.log(err))
    
    
//==============================================================================================    
    const promesaTres=(valorBooleano)=>{

        return new Promise( (resolve,reject)=> {

            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
    }

    promesaTres(false)
    .then(respuesta=>console.log(respuesta))
    .catch(err=> console.log(err))
//====================================================================================")        
const promesaCuatro=(arguments)=>{

        return new Promise( (resolve,reject)=> {

            ( true === arguments )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
}

    promesaCuatro(true)
    .then(respuesta=>console.log(respuesta))
    .catch(err=> console.log(err))