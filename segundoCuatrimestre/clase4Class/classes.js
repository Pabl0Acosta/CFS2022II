var Animal = /** @class */ (function () {
    function Animal(cantPatas, name) {
        this.cantidadDePatas = cantPatas;
        this.nombre = name;
    }
    Animal.prototype.mostrarInfo = function () {
        console.log("la info es: ");
    };
    return Animal;
}());
var araña = new Animal(8, "fido");
console.log(araña);
var Televisor = /** @class */ (function () {
    function Televisor(volume, channel, itsOn) {
        this.canal = channel;
        this.volumen = volume;
        this.estaPrendido = itsOn;
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
var televisor1 = new Televisor(10, 54, true);
console.log(televisor1.getCanal());
televisor1.setCanal(20);
televisor1.bajarVolumen();
televisor1.apagarTele();
console.log(televisor1);
