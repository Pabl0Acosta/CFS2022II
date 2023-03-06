//-------------------------------------------
//EJEMPLO DE HERENCIA
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
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.volumen = 50;
        this.canal = 25;
        this.estaPrendido = true;
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
var SmartTv = /** @class */ (function (_super) {
    __extends(SmartTv, _super);
    function SmartTv(estaConectado) {
        var _this = _super.call(this) || this;
        //this.volumen = 50;
        //this.canal = 25;
        //this.estaPrendido = true;
        _this.estarConectado = estaConectado;
        return _this;
    }
    SmartTv.prototype.mirarNetflix = function () {
        console.log("mirar netflix..");
    };
    return SmartTv;
}(Televisor));
var miSmart = new SmartTv(true);
console.log(miSmart);
miSmart.bajarVolumen();
console.log(miSmart);
console.log(miSmart.getCanal());
//----------------------------------------------------------------
//EJEMPLO DE COMPOSICION
//hacer una clase a partir de otras clases
/*
import Pantalla from '../clase5/clases/Pantalla'
import Boton from '../clase5/clases/Boton'
import Enchufe from '../clase5/clases/Enchufe'
import Tele from '../clase5/clases/Tele'
//import { borrar, crearAuto } from './clases/funciones';


let boton : Boton = new Boton();

let pantalla : Pantalla = new Pantalla(42)

let enchufe : Enchufe = new Enchufe();

let miTV : Tele = new Tele(pantalla, boton, enchufe);


//crearAuto();
//borrar();*/ 
