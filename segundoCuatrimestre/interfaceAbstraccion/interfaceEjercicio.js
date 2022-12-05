var AutoCarrera = /** @class */ (function () {
    function AutoCarrera() {
        this.velocidadActual = 50;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarrera.prototype.frenar = function () {
        this.velocidadActual -= 50;
    };
    AutoCarrera.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoCarrera;
}());
var AutoFamiliar = /** @class */ (function () {
    function AutoFamiliar(cantidadPuertas, marca, color) {
        this.cantidadPuertas = 4;
        this.marca = "chevrolet";
        this.color = "rojo";
        this.velocidadActual = 30;
    }
    AutoFamiliar.prototype.acelerar = function () {
        this.velocidadActual += 40;
    };
    AutoFamiliar.prototype.frenar = function () {
        this.velocidadActual -= 50;
    };
    AutoFamiliar.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    AutoFamiliar.prototype.getCantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    AutoFamiliar.prototype.getMarca = function () {
        return this.marca;
    };
    AutoFamiliar.prototype.getColor = function () {
        return this.color;
    };
    return AutoFamiliar;
}());
