//Ejercicio1: Crear una clase -con al menos 2 métodos y 2 atributos-
//Ejercicio2: Crear un objeto-

class Televisor {
    protected tamaño: number;
    protected canal: number;
    constructor(tamaño: number, canal: number) {
    this.tamaño = tamaño;
    this.canal = canal;
 }

public bark(): void {
    console.log ();
 }
 public cry(): void {
    console.log ();
 }
}

let dog = new Televisor(33, 12);
console.log(dog)

//------------------------------------------------------------------------------
//Ejercicio3: Crear una interfaz - implementarla en una clase-
interface Radio {
    subirVolumen() : void
    getVolumenActual () : number;
}

class RadioSony implements Radio {
    private volumenActual : number;

    public constructor() {
        this.volumenActual = 50
    }
    
    public bajarVolumen() : void {
        this.volumenActual -= 1;
    }
    public subirVolumen() : void {
        this.volumenActual += 1;
    }
    public getVolumenActual(): number {
        return this.volumenActual;
    }
} 

//------------------------------------------------------------------------------
//Ejercicio4: Crear una clase Abstracta

abstract class Simpson{
    abstract Hablar(): void;
}

class Homero extends Simpson {
    Hablar(): void {
        console.log("A la grande le puse cuca")
    }
}

//------------------------------------------------------------------------------
//Ejercicio5: Crear una relación de herencia
//Ejercicio6: Crear un ejemplo de composición
import Fabricante from "./Fabricante";
class Celular {
    protected color: string;
    constructor(color: string) {
    this.color = color;
 }

    public Sonar(): void {
    console.log ();
 }
}

class CelularNuevo extends Celular{
    private fabricante: Fabricante;

        constructor(fabricante: Fabricante) {
        super("negro");
            this.fabricante = fabricante;
}
    public Sonar(): void {
        console.log("ring ring");
  }
  public setFabricante(nuevoFabricante : Fabricante) : void {
    this.fabricante = nuevoFabricante;
}
}

let nokia = new Fabricante("nokia")
let smartphone: CelularNuevo = new CelularNuevo(nokia);
console.log(smartphone);
smartphone.Sonar();




