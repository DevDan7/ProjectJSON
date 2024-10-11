console.log("Trabajando con JSON")

const objetoJS = {

    nome: 'Daniel',
    idade: 42,
    estrangeiro: true


}

console.log(objetoJS)
console.log(typeof(objetoJS))

// Falsa string JSON

const falsaStringJSON = {
    "nome": "Daniel",
    "idade": 42,
    "estrangeiro": true
}

console.log(falsaStringJSON)
console.log(typeof(falsaStringJSON))

// Transformando una Objeto JavaScript en JSON
// Metodo stringify

const stringJSON = JSON.stringify(objetoJS)


console.log(stringJSON)
console.log(typeof(stringJSON))

//metodo parsed cobierte JSON a cualquier otra linguajen en objeto

const parsedJSON = JSON.parse(stringJSON)

console.log(parsedJSON)
console.log(typeof(parsedJSON))

// llamando datos del objeto 

console.log(parsedJSON.estrangeiro)