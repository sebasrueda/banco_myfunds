function moneda() {
    this.nombre
    this.tipoDeCambio
    this.mensaje = "Por favor ingrese un número válido"

    this.convertir = function(monto) {
        conversionResultado = monto * this.tipoDeCambio

        var mensajeHTML

        if(conversionResultado <= 0) {
            mensajeHTML = this.mensaje
        } else if (monto == 1) {
            mensajeHTML = monto + " euro equivale a " + conversionResultado + " " + this.nombre
        } else {
            mensajeHTML = monto + " euros equivalen a " + conversionResultado + " " + this.nombre
        }

        document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML
    }
}

var yen = new moneda
yen.nombre = "Yenes"
yen.tipoDeCambio = 117.266

var cop = new moneda
cop.nombre = "Pesos"
cop.tipoDeCambio = 4113.76

var usd = new moneda
usd.nombre = "Dólares"
usd.tipoDeCambio = 1.08975

function convertirMoneda(tipoDeMoneda) {

    var montoSeleccionado = document.getElementById('monto').value

    if(tipoDeMoneda == "yen") {
        yen.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "usd") {
        usd.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "cop") {
        cop.convertir(montoSeleccionado)
    }
}