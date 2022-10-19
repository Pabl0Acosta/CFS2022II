var Decodificador = /** @class */ (function () {
    function Decodificador(canales) {
        this.canales = canales;
    }
    return Decodificador;
}());
var decodificador = new Decodificador(5);
var Televisor = /** @class */ (function () {
    function Televisor(volume, channel, itsTurnedOn, decoder, screenSize) {
        this.canal = channel;
        this.volumen = volume;
        this.estaPrendido = itsTurnedOn;
        this.decodificador = decoder;
        if (screenSize == undefined) {
            this.pulgadas = -1;
        }
        else {
            this.pulgadas = screenSize;
        }
    }
    Televisor.prototype.subirVolumen = function () {
        this.volumen = this.volumen + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumen = this.volumen - 1;
    };
    Televisor.prototype.apagarTele = function () {
        this.estaPrendido = false;
    };
    Televisor.prototype.prenderTele = function () {
        this.estaPrendido = true;
    };
    Televisor.prototype.getCanal = function () {
        return "esta en el canal " + this.canal;
    };
    Televisor.prototype.setCanal = function (canal) {
        this.canal = canal;
    };
    return Televisor;
}());
var televisor1 = new Televisor(10, 54, true, decodificador);
var televisor2 = new Televisor(15, 12, true, decodificador);
var televisor3 = new Televisor(20, 34, true, decodificador);
var arregloTelevisore = [televisor1, televisor2, televisor3];
console.log(televisor1.getCanal());
televisor1.setCanal(20);
televisor1.bajarVolumen();
televisor1.apagarTele();
console.log(televisor1);
