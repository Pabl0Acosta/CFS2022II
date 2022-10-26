"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 54;
        this.color = "blanco";
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("mandar mensaje..");
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("hacer llamada..");
    };
    Telefono.prototype.encender = function () {
        console.log("encender");
    };
    Telefono.prototype.apagar = function () {
        console.log("apagar");
    };
    Telefono.prototype.getcColor = function () {
        return this.color;
    };
    return Telefono;
}());
exports["default"] = Telefono;
