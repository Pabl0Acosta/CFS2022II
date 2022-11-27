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
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
    }
    return Vehiculo;
}());
var Autociudad = /** @class */ (function (_super) {
    __extends(Autociudad, _super);
    function Autociudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Autociudad.prototype.getColor = function () {
        return "blanco";
    };
    Autociudad.prototype.getMarca = function () {
        return "fiat";
    };
    Autociudad.prototype.getCantidadPuertas = function () {
        return 4;
    };
    return Autociudad;
}(Vehiculo));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(cantidadEscapes, colorCristales) {
        var _this = _super.call(this) || this;
        _this.cantidadEscapes = 4;
        _this.colorCristales = "negros";
        return _this;
    }
    AutoDeportivo.prototype.getColor = function () {
        return "rojo";
    };
    AutoDeportivo.prototype.getMarca = function () {
        return "Bugatti";
    };
    AutoDeportivo.prototype.getCantidadPuertas = function () {
        return 2;
    };
    AutoDeportivo.prototype.getCantidadEscapes = function () {
        return this.cantidadEscapes;
    };
    AutoDeportivo.prototype.getColorCristales = function () {
        return this.colorCristales;
    };
    return AutoDeportivo;
}(Vehiculo));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(cantidadAsientos, tieneCajaAbierta) {
        var _this = _super.call(this) || this;
        _this.cantidadAsientos = 2;
        _this.tieneCajaAbierta = true;
        return _this;
    }
    Camioneta.prototype.getColor = function () {
        return "azul";
    };
    Camioneta.prototype.getMarca = function () {
        return "ford";
    };
    Camioneta.prototype.getCantidadPuertas = function () {
        return 2;
    };
    Camioneta.prototype.getCantidadAsientos = function () {
        return this.cantidadAsientos;
    };
    Camioneta.prototype.taparCaja = function () {
        this.tieneCajaAbierta = false;
    };
    Camioneta.prototype.destaparCaja = function () {
        this.tieneCajaAbierta = true;
    };
    return Camioneta;
}(Vehiculo));
