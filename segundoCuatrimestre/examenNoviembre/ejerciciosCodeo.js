"use strict";
//Ejercicio1: Crear una clase -con al menos 2 métodos y 2 atributos-
//Ejercicio2: Crear un objeto-
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
var Televisor = /** @class */ (function () {
    function Televisor(tamaño, canal) {
        this.tamaño = tamaño;
        this.canal = canal;
    }
    Televisor.prototype.bark = function () {
        console.log();
    };
    Televisor.prototype.cry = function () {
        console.log();
    };
    return Televisor;
}());
var dog = new Televisor(33, 12);
console.log(dog);
var RadioSony = /** @class */ (function () {
    function RadioSony() {
        this.volumenActual = 50;
    }
    RadioSony.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    RadioSony.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    RadioSony.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    return RadioSony;
}());
//------------------------------------------------------------------------------
//Ejercicio4: Crear una clase Abstracta
var Simpson = /** @class */ (function () {
    function Simpson() {
    }
    return Simpson;
}());
var Homero = /** @class */ (function (_super) {
    __extends(Homero, _super);
    function Homero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homero.prototype.Hablar = function () {
        console.log("A la grande le puse cuca");
    };
    return Homero;
}(Simpson));
//------------------------------------------------------------------------------
//Ejercicio5: Crear una relación de herencia
//Ejercicio6: Crear un ejemplo de composición
var Fabricante_1 = require("./Fabricante");
var Celular = /** @class */ (function () {
    function Celular(color) {
        this.color = color;
    }
    Celular.prototype.Sonar = function () {
        console.log();
    };
    return Celular;
}());
var CelularNuevo = /** @class */ (function (_super) {
    __extends(CelularNuevo, _super);
    function CelularNuevo(fabricante) {
        var _this = _super.call(this, "negro") || this;
        _this.fabricante = fabricante;
        return _this;
    }
    CelularNuevo.prototype.Sonar = function () {
        console.log("ring ring");
    };
    CelularNuevo.prototype.setFabricante = function (nuevoFabricante) {
        this.fabricante = nuevoFabricante;
    };
    return CelularNuevo;
}(Celular));
var nokia = new Fabricante_1["default"]("nokia");
var smartphone = new CelularNuevo(nokia);
console.log(smartphone);
smartphone.Sonar();
