"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(frecuenciaActual, conexionInternet) {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = frecuenciaActual;
        _this.conexionInternet = conexionInternet;
        return _this;
    }
    TelefonoConRadio.prototype.verfrecuenciaActual = function () {
        console.log("la frecuencia es " + this.frecuenciaActual + "MHz");
    };
    TelefonoConRadio.prototype.subirfrecuenciaActual = function () {
        this.frecuenciaActual = this.frecuenciaActual + 1;
    };
    TelefonoConRadio.prototype.bajarfrecuenciaActual = function () {
        this.frecuenciaActual = this.frecuenciaActual - 1;
    };
    TelefonoConRadio.prototype.conectarInternet = function () {
        this.conexionInternet = true;
    };
    TelefonoConRadio.prototype.desconectarInternet = function () {
        this.conexionInternet = false;
    };
    return TelefonoConRadio;
}(Telefono_1["default"]));
exports["default"] = TelefonoConRadio;
