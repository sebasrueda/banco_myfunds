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
            mensajeHTML = monto + " yen equivale a " + conversionResultado + " " + this.nombre
        } else {
            mensajeHTML = monto + " yenes equivalen a " + conversionResultado + " " + this.nombre
        }

        document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML
    }
}

var cop = new moneda
cop.nombre = "Pesos"
cop.tipoDeCambio = 35.0853

var euro = new moneda
euro.nombre = "Euros"
euro.tipoDeCambio = 0.00852921

var usd = new moneda
usd.nombre = "Dólares"
usd.tipoDeCambio = 0.00929446

function convertirMoneda(tipoDeMoneda) {

    var montoSeleccionado = document.getElementById('monto').value

    if(tipoDeMoneda == "cop") {
        cop.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "usd") {
        usd.convertir(montoSeleccionado)
    } else if (tipoDeMoneda == "euro") {
        euro.convertir(montoSeleccionado)
    }
}