//-------------------------------------------
//EJEMPLO DE HERENCIA

class Televisor {
    private volumen : number;
    protected canal : number;
    private estaPrendido : boolean;

   public constructor (){
        this.volumen = 50;
        this.canal = 25;
        this.estaPrendido = true;
    }
    public subirVolumen() : void {
        this.volumen = this.volumen +1;
    }
    public bajarVolumen() : void {
        this.volumen = this.volumen -1;
    }
    public apagarTele() {
        this.estaPrendido = false;
    }
    public prenderTele() {
        this.estaPrendido = true;
    }
    public getCanal() {
        return "esta en el canal " + this.canal;
    }
    public setCanal(canal:number) {
        this.canal = canal;
    }
}

class SmartTv extends Televisor {
    public estarConectado : boolean;

    public constructor(estaConectado: boolean) {
        super();
        //this.volumen = 50;
        //this.canal = 25;
        //this.estaPrendido = true;
        this.estarConectado = estaConectado;
    }

    public mirarNetflix(){
        console.log("mirar netflix..");
    }

        //public getCanalTV(): number {
          //  return this.canal}
    }


let miSmart : SmartTv = new SmartTv(true);
console.log(miSmart);
miSmart.bajarVolumen();
console.log(miSmart);

console.log(miSmart.getCanal())


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