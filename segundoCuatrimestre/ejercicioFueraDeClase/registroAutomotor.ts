import * as fs from 'fs';

class Auto {
    private marca: string;
    private modelo: string;
    private color: string;

    public constructor(brand: string, model: string, colour: string) {
        this.marca = brand;
        this.modelo = model;
        this.color = colour;
    }

    public getMarca() {
        return this.marca;
    }

    public getModelo() {
        return this.modelo;
    }

    public getcolor() {
        return this.color;
    }

}

class RegistroDelAutomotor {
    private nombre: string;
    private direccion: string;
    private listaAutos: Array<Auto>;

    public constructor(nombre: string, direccion: string, listaAutos: Array<Auto>) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAutos = listaAutos;
    }

    public getListaAutos() {
        return this.listaAutos;
    }
}

class LectorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }
}

function crearAuto(car: string, arrayCar: Array<Auto>): void {

    let propiedadAuto : string[] = car.split(',');
    let marca: string = propiedadAuto[0];
    let modelo: string = propiedadAuto[1];
    let color: string = propiedadAuto[2];
    let nuevoAuto : Auto = new Auto(marca,modelo,color);

    arrayCar.push(nuevoAuto);
}

function borrarAuto(arrayAuto: Array<Auto>,  position: number): void {
    let posicion = position -1 
    delete arrayAuto[posicion];
}

function modificarAuto(arrayAuto: Array<Auto>, posicion: number){
    let agregarMarca = require('readline-sync');
    let agregarModelo = require('readline-sync');
    let agregarColor = require('readline-sync');
    let marca = agregarMarca.question('agregar marca: ');
    let modelo = agregarModelo.question('agregar modelo: ');
    let color = agregarColor.question('agregar color: ');

    let autoModificado : Auto = new Auto(marca,modelo,color);

    delete arrayAuto[posicion];
    arrayAuto[posicion] = autoModificado;
}


//Inicio programa
let datos: LectorDeArchivos = new LectorDeArchivos('autos.txt');
let arrayAuto: Array<Auto> = [];
let afirmacion: string = "si";
let agregarAuto = require('readline-sync');
let reemplazarAutoPregunta = require('readline-sync');
let eliminarAuto = require('readline-sync');

for (let i: number = 0; i < datos.getArregloString().length; i++) {
    
    crearAuto(datos.getArregloString()[i], arrayAuto);

}
console.log(arrayAuto);

let autoAgregado = agregarAuto.question('desea modificar un auto?: ');
if (autoAgregado === afirmacion ) {

let seleccionAuto: number = reemplazarAutoPregunta.question('desea reemplazar el auto 1, 2 o 3?: ');
    if (seleccionAuto >=1 || seleccionAuto <=3){
        console.log("ingrese nuevo auto");
    let posicion: number = seleccionAuto -1;
    modificarAuto(arrayAuto,  posicion)
    console.log(arrayAuto);
    console.log("intercambio completado");
    }
} else {
    console.log("intercambio completado");
}

let autoEliminado = eliminarAuto.question('desea solo eliminar un auto?: ');
        if (autoEliminado === afirmacion ) {
         let seleccionAuto: number = reemplazarAutoPregunta.question('desea eliminar el auto 1, 2 o 3?: ');
         if (seleccionAuto >=1 || seleccionAuto <=3) {
    let posicion: number = seleccionAuto;
    borrarAuto(arrayAuto, posicion)
    console.log(arrayAuto);
    console.log("registro terminado");
    }
} else {
        console.log("registro terminado");
}