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
            mensajeHTML = monto + " dólar equivale a " + conversionResultado + " " + this.nombre
        } else {
            mensajeHTML = monto + " dólares equivalen a " + conversionResultado + " " + this.nombre
        }

        document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML
    }
}

var yen = new moneda
yen.nombre = "Yenes"
yen.tipoDeCambio = 107.615

var euro = new moneda
euro.nombre = "Euros"
euro.tipoDeCambio = 0.917592

var cop = new moneda
cop.nombre = "Pesos"
cop.tipoDeCambio = 3774.96

function convertirMoneda(tipoDeMoneda) {

    var montoSeleccionado = document.getElementById('monto').value

    if(tipoDeMoneda == "yen") {
        yen.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "cop") {
        cop.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "euro") {
        euro.convertir(montoSeleccionado)
    }
}