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

        constructor() {
        super("negro");
}
    public Sonar(): void {
        console.log("ring ring");
  }
}


let smartphone: CelularNuevo = new CelularNuevo();
console.log(smartphone);
smartphone.Sonar();

//------------------------------------------------------------------------------
//Ejercicio6: Crear un ejemplo de composición
class Pantalla{
    private pulgadas : number;

    constructor(pulgadas : number){
        this.pulgadas = pulgadas;
    }
}

class Cable{
    constructor(){

    }
}

class Antena{
    constructor(){
         
    }
}

class televisor{
    private pantalla : Pantalla;
    private cable : Cable;
    private antena : Antena;

    constructor(pantalla : Pantalla, cable : Cable , antena : Antena){
        this.pantalla = pantalla;
        this.cable = cable;
        this.antena = antena;
    }

}

let cable : Cable = new Cable();
let pantalla : Pantalla = new Pantalla(42);
let antena : Antena = new Antena();

let smart : televisor = new televisor(pantalla,cable,antena);
