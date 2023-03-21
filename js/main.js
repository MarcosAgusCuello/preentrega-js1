let continuar = true


const Bienvenida = "Bienvenid@ a calculadora de intereses, ingresa tu monto para calcular los intereses \n" +
    "Argentina \n" +
    "Australia \n" +
    "Canada \n" +
    "USA \n"

function intereses() {
    let resultado = prompt(Bienvenida)
    if (resultado !== "Argentina" && resultado !== "Australia" && resultado !== "Canada" && resultado !== "USA") {
        console.error("Por favor, ingresa unos de los paises en el listado")
    } else {
        switch (resultado) {
            case "Argentina":
                alert("la tasa de interes es mas del 100% interanual, por favor comprar dolares o oro \n 100-105%")
                break
            case "Australia":
                alert("la tasa de interes es segura, pero no lo suficientemente rentable... si no te pica algun bicho afuera o te pega un canguro \n la tasa de interes es 5.1%")
                break
            case "Canada":
                alert("la tasa es muy segura pero el clima muy frio, seria mejor que inviertas en un nuevo juego de cubiertas para el invierno por tu seguridad \n la tasa es del 4.5%")
                break
            case "USA":
                alert("saca tu plata del banco, no sabemos si tu banco se va a ir en quiebra... compra oro al gitano y guardalo en una caja fuerte \n 🪙error 404, bank not found❌")
                break
            default:
                console.error("No estan estos paises en el listado")
        }
    }
}

function interesDePaises() {
    while (continuar) {
        intereses()
        continuar = confirm("queres saber los intereses de estos 4 paises?")
    }
    alert("estas seguro que no queres saber los intereses de estos 4 paises?")
}