const prompt = require("prompt-sync")({ sigint: true });

//let edad = 20

// if (edad < 18) {
//     console.log("NO puede pasar al bar")

// } else if (edad < 21) {
//     console.log("Puede pasar pero no tomar alcohol")

// } else {
//     console.log("Puede pasar pero y tomar alcohol")

// }

// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: no se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// edad es impar?".

// let edad = 0

// if (edad < 0) {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.")
// } else {

//     if (edad < 18) {
//         console.log("NO puede pasar al bar")

//     } else if (edad < 21) {
//         console.log("Puede pasar pero no tomar alcohol")

//     } else {
//         console.log("bienvenidoal bar!!, felicidades por haber llegado a la mayoría de edad!!.")

//     }

//     if (edad % 2 === 0 && edad != 0) {
//         console.log("¿Sabías que tu edad es impar?")
//     }
// }


/*totalAPagar()
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones. 
● Si el vehículo es “coche”, el precio por litro es de $86, 
● Si es “moto” ha de ser $70. 
● Si es “autobús” ha de ser $55. 
● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar. 
● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar. */

function totalAPagar(vehiculo, litrosConsumidos) {

    if (!isNaN(litrosConsumidos)) {

        let precioPorLitro = 0
        let totalAPagar = 0

        if (vehiculo === "coche") {
            precioPorLitro = 86

        } else if (vehiculo === "moto") {
            precioPorLitro = 70

        } else if (vehiculo === "autobus") {
            precioPorLitro = 55

        } else {
            console.log("Vehiculo incorrecto")
            return
        }

        totalAPagar = litrosConsumidos * precioPorLitro

        if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
            totalAPagar += 50

        } else if (litrosConsumidos > 25) {
            totalAPagar += 25

        }
        console.log(`El total a pagar es: $${totalAPagar}`)


    } else {
        console.log("Ingrese un numero valido de litros cosumidos")
    }


}

let typeOfVehiculo = prompt("Ingrese el typo de vehiculo: ")
let numeroDeLitros = prompt("Ingrese el nro de litos consumidos: ")

totalAPagar(typeOfVehiculo, numeroDeLitros)


/*Local de sándwiches 
Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes eligen el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma el valor de su seleccion al precio, por ej, un sadwich base vegetariano con un precio x, despues selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y asi sucecivamente con el resto de los ingredientes. 
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera: 
Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor base diferente por cada selección: 
● Pollo = $150 (“pollo”) 
● Carne = $200 (“carne”) 
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego de eso el sistema les pregunta qué tipo de pan querrán, tienen para elegir entre otras 3 opciones, por lo que recibiremos también otro string con el tipo de pan deseado: 
● Blanco c/orégano y parmesano = $50 (“blanco”) 
● Negro c/avena = $60 (“negro”) 
● Sin gluten = $75 (“s/gluten”)  
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales: 
● Queso = $20 
● Tomate = $15 
● Lechuga = $10 
● Cebolla = $15 
● Mayonesa = $5 
● Mostaza = $5 
Cada uno de estos adicionales están representados por booleanos, es decir true o false, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total de 6 valores booleanos, uno por cada adicional). 
Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá retornar el valor numérico del total a pagar del cliente. 
*/

function OrdenarSandwichesAndPagar(tipoDeSandwich, tipoDePan, Queso, Tomate, Lechuga, Cebolla, Mayonesa, Mostaza) {

    if (typeof (tipoDeSandwich) === 'string' && typeof (tipoDePan) === 'string') {
        if (typeof (Queso) === 'boolean' && typeof (Tomate) === 'boolean' && typeof (Lechuga) === 'boolean' && typeof (Cebolla) === 'boolean' && typeof (Mayonesa) === 'boolean' && typeof (Mostaza) === 'boolean') {

            let precioSandwich = 0
            let adicionalSeleccionado = ""

            if (tipoDeSandwich === "pollo") {
                precioSandwich = 150
            } else if (tipoDeSandwich === "carne") {
                precioSandwich = 200
            } else if (tipoDeSandwich === "veggie") {
                precioSandwich = 100
            } else {
                console.log("Seleccion de tipo de sandwich incorrecta vuelve a pedir");
                return
            }

            if (tipoDePan === "blanco") {
                precioSandwich += 50
            } else if (tipoDePan === "negro") {
                precioSandwich += 60
            } else if (tipoDePan === "s/gluten") {
                precioSandwich += 75
            } else {
                console.log("Seleccion de tipo de pan incorrecta vuelve a pedir");
                return
            }


            if (Queso === true) {
                precioSandwich += 20
                adicionalSeleccionado = " Queso"
            }
            if (Tomate === true) {
                precioSandwich += 15
                adicionalSeleccionado += " Tomate"
            }
            if (Lechuga === true) {
                precioSandwich += 10
                adicionalSeleccionado += " Lechuga"
            }
            if (Cebolla === true) {
                precioSandwich += 15
                adicionalSeleccionado += " Cebolla"
            }
            if (Mayonesa === true) {
                precioSandwich += 5
                adicionalSeleccionado += " Mayonesa"
            }
            if (Mostaza === true) {
                precioSandwich += 5
                adicionalSeleccionado += " Mostaza"

            }

            return `El precio a pagar del sanswich de ${tipoDeSandwich} con pan ${tipoDePan} y${adicionalSeleccionado} es $${precioSandwich}`

        } console.log("Input boolean no valido")

    } else { console.log("Input string no valido") }

}


const ordenSandwich = {
    tipoDeSandwich: "pollo",
    tipoDePan: "blanco",
    adicionalSeleccionado: {
        Queso: false,
        Tomate: true,
        Lechuga: true,
        Cebolla: true,
        Mayonesa: false,
        Mostaza: true
    }
}

let tipoDeSandwich = ((Object.values(ordenSandwich))[0])
let tipoDePan = ((Object.values(ordenSandwich))[1])
let Queso = (Object.values(Object.values(ordenSandwich)[2])[0])
let Tomate = (Object.values(Object.values(ordenSandwich)[2])[1])
let Lechuga = (Object.values(Object.values(ordenSandwich)[2])[2])
let Cebolla = (Object.values(Object.values(ordenSandwich)[2])[3])
let Mayonesa = (Object.values(Object.values(ordenSandwich)[2])[4])
let Mostaza = (Object.values(Object.values(ordenSandwich)[2])[5])

// let tipoDeSandwich = ordenSandwich.tipoDeSandwich
// let tipoDePan = ordenSandwich.tipoDePan
// let Queso = ordenSandwich.adicionalSeleccionado.Queso
// let Tomate = ordenSandwich.adicionalSeleccionado.Tomate
// let Lechuga = ordenSandwich.adicionalSeleccionado.Lechuga
// let Cebolla = ordenSandwich.adicionalSeleccionado.Cebolla
// let Mayonesa = ordenSandwich.adicionalSeleccionado.Tomate
// let Mostaza = ordenSandwich.adicionalSeleccionado.Mayonesa


console.log(OrdenarSandwichesAndPagar(tipoDeSandwich, tipoDePan, Queso, Tomate, Lechuga, Cebolla, Mayonesa, Mostaza)) //pedido fromEnd
console.log(OrdenarSandwichesAndPagar("pollo", "blanco", false, true, true, true, false, true)) // pedido manual


/*¿Cual es el número secreto? 
Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el número secreto.
El número secreto deberá ser seleccionado de manera random de entre 1 y 10 (investiga que hace la función Math.random()),
en caso de ser correcto retorna un mensaje felicitando al usuario, y en caso de que no acierte, 
retorna un mensaje de aliento junto con el número ingresado y el secreto.*/

function verificarNumeroSecreto(numero) {
    if (typeof numero === 'number') {   //control de error
        let numeroSecret = Math.floor(Math.random() * (11 - 1 + 1) + 1)
        if (numeroSecret === numero) {
            return `Felicidades adivinaste el numero secreto ${numeroSecret} :)!!`
        } else {
            return `Sigue intentando el numero ingresado fue ${numero} y el numero secreto fue ${numeroSecret} :(`
        }

    } else {
        return `No ingresaste un numero, intenta de nuevo!!` //control de error
    }
}

console.log(verificarNumeroSecreto(7))

/*abrirParacaidas() 
Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidad y altura.
La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo siguiente: 
● La velocidad debe ser menor a 1000 km/h 
● La altura debe ser mayor o igual a 2000m y menor a 3000m */

function abrirParacaidas(velocidad, altura) {
    if (typeof velocidad === 'number' && typeof altura === 'number') { //control de error

        if (velocidad < 1000 && altura >= 200 && altura < 3000) {
            return `Abrir paracaidas!!!`
        } else {
            return `Aun NO podemos abrir paracaidas`
        }

    } else {
        return `No ingresaste un valor de velocidad o altura validos` //control de error
    }

}

console.log(abrirParacaidas(1000, 200))


/*Traductor Condicional 
Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", 
nos devuelva la misma palabra traducida al idioma inglés. 
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.*/

function traductorCondicional(palabra) {
    if (typeof palabra === 'string') {
        switch (palabra) {
            case 'casa':
                return `home`
                break;
            case 'perro':
                return `dog`
                break;
            case 'pelota':
                return `ball`
                break;
            case 'arbol':
                return `tree`
                break;
            case 'genio':
                return `genius`
                break;

            default:
                return "la palabra ingresada es incorrecta"
                break;
        }
    } else {
        return `Intenta nuevamente. Ingresaste un numero, debemos escribir una palabra de la lista`
    }

}

console.log(traductorCondicional("casa"))


/*Valoración de Películas
Usando la estructura switch, pedile al usuario que valore la película que acaba de ver en:
● Muy Mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras por su valoración.
Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
Cuando el usuario haya valorado la película, agradecele su visita.*/

function valoararPelicula(valoracion) {
    if (typeof valoracion === 'string') {
        switch (valoracion) {
            case 'Muy Mala':
                return `Calificaste la película como ${valoracion}. Lo lamentamos mucho.`
                break;
            case 'Mala':
                return `Calificaste la película como ${valoracion}. Lo lamentamos mucho.`
                break;
            case 'Mediocre':
                return `Calificaste la película como ${valoracion}. Lo lamentamos.`
                break;
            case 'Buena':
                return `Calificaste la película como ${valoracion}. Nos alegramos!!.`
                break;
            case 'Muy buena':
                return `Calificaste la película como ${valoracion}. Nos alegramos mucho!!.`
                break;

            default:
                return "Ingresaste un valor inválido"
                break;
        }
    } else {
        return `Intenta nuevamente. Ingresaste un numero, debemos escribir una valoracion de la lista`
    }

}

console.log(valoararPelicula("Muy buena"))