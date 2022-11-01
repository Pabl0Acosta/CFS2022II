"use strict";
exports.__esModule = true;
var fs = require("fs");
var Auto = /** @class */ (function () {
    function Auto(brand, model, colour) {
        this.marca = brand;
        this.modelo = model;
        this.color = colour;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getcolor = function () {
        return this.color;
    };
    return Auto;
}());
var RegistroDelAutomotor = /** @class */ (function () {
    function RegistroDelAutomotor(nombre, direccion, listaAutos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAutos = listaAutos;
    }
    RegistroDelAutomotor.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    return RegistroDelAutomotor;
}());
var LectorDeArchivos = /** @class */ (function () {
    function LectorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    LectorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorDeArchivos;
}());
function crearAuto(car, arrayCar) {
    var propiedadAuto = car.split(',');
    var marca = propiedadAuto[0];
    var modelo = propiedadAuto[1];
    var color = propiedadAuto[2];
    var nuevoAuto = new Auto(marca, modelo, color);
    arrayCar.push(nuevoAuto);
}
function borrarAuto(arrayAuto, position) {
    var posicion = position - 1;
    delete arrayAuto[posicion];
}
function modificarAuto(arrayAuto, posicion) {
    var agregarMarca = require('readline-sync');
    var agregarModelo = require('readline-sync');
    var agregarColor = require('readline-sync');
    var marca = agregarMarca.question('agregar marca: ');
    var modelo = agregarModelo.question('agregar modelo: ');
    var color = agregarColor.question('agregar color: ');
    var autoModificado = new Auto(marca, modelo, color);
    delete arrayAuto[posicion];
    arrayAuto[posicion] = autoModificado;
}
//Inicio programa
var datos = new LectorDeArchivos('autos.txt');
var arrayAuto = [];
var afirmacion = "si";
var agregarAuto = require('readline-sync');
var reemplazarAutoPregunta = require('readline-sync');
var eliminarAuto = require('readline-sync');
for (var i = 0; i < datos.getArregloString().length; i++) {
    crearAuto(datos.getArregloString()[i], arrayAuto);
}
console.log(arrayAuto);
var autoAgregado = agregarAuto.question('desea modificar un auto?: ');
if (autoAgregado === afirmacion) {
    var seleccionAuto = reemplazarAutoPregunta.question('desea reemplazar el auto 1, 2 o 3?: ');
    if (seleccionAuto >= 1 || seleccionAuto <= 3) {
        console.log("ingrese nuevo auto");
        var posicion = seleccionAuto - 1;
        modificarAuto(arrayAuto, posicion);
        console.log(arrayAuto);
        console.log("intercambio completado");
    }
}
else {
    console.log("intercambio completado");
}
var autoEliminado = eliminarAuto.question('desea solo eliminar un auto?: ');
if (autoEliminado === afirmacion) {
    var seleccionAuto = reemplazarAutoPregunta.question('desea eliminar el auto 1, 2 o 3?: ');
    if (seleccionAuto >= 1 || seleccionAuto <= 3) {
        var posicion = seleccionAuto;
        borrarAuto(arrayAuto, posicion);
        console.log(arrayAuto);
        console.log("registro terminado");
    }
}
else {
    console.log("registro terminado");
}
