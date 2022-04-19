const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]
// BUSCAMOS AL EXPLORER Y SU OBJETO
console.log("------------------------------------------------")
console.log("BUSCAMOS AL EXPLORER Y SU OBJETO")
console.log("------------------------------------------------")
explorers.forEach(element => {console.log("El explorer "+element.name+" tiene "+element.stack)});

// PASAMOS LOS ITEMS DEL EXPLORER A UN NUEVO ARRAY
const stackE = explorers.map(function(x){
    var contenido ={}
    contenido[x.name] = x.stack
    return contenido
})
console.log("------------------------------------------------")
console.log("PASAMOS LOS ITEMS DEL EXPLORER A UN NUEVO ARRAY")
console.log("------------------------------------------------")
console.log(stackE)

// FILTRAMOS A QUIENES TIENE JS EN SU ITEM
//const resultjs = explorers.filter(explorers => explorers.stack == "js")
const filterItems = query => {
    return explorers.filter((el) =>
      el.stack.indexOf(query.toLowerCase()) > -1
    );
}
console.log("------------------------------------------------")
console.log("FILTRAMOS A QUIENES TIENE JS EN SU ITEM")
console.log("------------------------------------------------")
console.log(filterItems('js'))
//console.log(resultjs)

// BUSCAMOS AL PRIMER EXPLORER DE CDMX
function busquedaCiudad(ciudad) {
    return ciudad.city === 'CDMX';
}
console.log("------------------------------------------------")
console.log("BUSCAMOS AL PRIMER EXPLORER DE CDMX")
console.log("------------------------------------------------")
console.log(explorers.find(busquedaCiudad))

// SUMAR TODOS LOS EJERCICOS RESUELTOS 
const ejercicios = explorers.map(function(x){// creo un nuevo arraya para facilidad
    var contenido =[]
    contenido = x.exercises_completed
    return contenido
})
const sumtotal = ejercicios.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log("------------------------------------------------")
console.log("SUMAR TODOS LOS EJERCICOS RESUELTOS")
console.log("------------------------------------------------")
console.log(sumtotal)

// OBTENER VALOR SI UN EXPLORER TIENE exercisesFinished TRUE
const even = (element) => element.missions.frontend.exercisesFinished === true;
console.log("------------------------------------------------")
console.log("OBTENER VALOR SI UN EXPLORER TIENE exercisesFinished TRUE EN FRONTEND")
console.log("------------------------------------------------")
console.log(explorers.some(even));


// OBTENER VALOR SI UN EXPLORER TIENE exercisesFinished TRUE
const onboarding = (currentValue) => currentValue.missions.onboarding.isFinished === true;

console.log("------------------------------------------------")
console.log("OBTENER VALOR SI UN EXPLORER TIENE isFinished TRUE EN EL ONBOARDING")
console.log("------------------------------------------------")
console.log(explorers.every(onboarding));