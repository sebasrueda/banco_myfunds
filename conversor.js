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
            mensajeHTML = monto + " peso equivale a " + conversionResultado + " " + this.nombre
        } else {
            mensajeHTML = monto + " pesos equivalen a " + conversionResultado + " " + this.nombre
        }

        document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML
    }
}

var yen = new moneda
yen.nombre = "Yenes"
yen.tipoDeCambio = 0.0285120

var euro = new moneda
euro.nombre = "Euros"
euro.tipoDeCambio = 0.000242975

var usd = new moneda
usd.nombre = "Dólares"
usd.tipoDeCambio = 0.000264870

function convertirMoneda(tipoDeMoneda) {

    var montoSeleccionado = document.getElementById('monto').value

    if(tipoDeMoneda == "yen") {
        yen.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "usd") {
        usd.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "euro") {
        euro.convertir(montoSeleccionado)
    }
}