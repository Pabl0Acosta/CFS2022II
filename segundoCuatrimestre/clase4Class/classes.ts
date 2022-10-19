class Decodificador {
    private canales;
    
    public constructor(canales){
        this.canales = canales;
    }
}

let decodificador = new Decodificador(5);

class Televisor{
    private volumen: number;
    private canal: number;
    private estaPrendido: boolean;
    private pulgadas: number;
    private decodificador: Decodificador;

    public constructor(volume: number, channel: number, itsTurnedOn: boolean, decoder: Decodificador, screenSize?: number) {
         this.canal = channel;
         this.volumen = volume;
         this.estaPrendido = itsTurnedOn;
         this.decodificador = decoder;

         if (screenSize == undefined) {
            this.pulgadas = -1
         } else {
            this.pulgadas = screenSize
         }
     }
    
    
    public subirVolumen() : void {
        this.volumen = this.volumen + 1;
    }
    public bajarVolumen() : void {
        this.volumen = this.volumen - 1;
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

    public setCanal(canal: number) {
        this.canal = canal
    }
}

let televisor1 = new Televisor(10, 54, true, decodificador);
let televisor2 = new Televisor(15, 12, true, decodificador);
let televisor3 = new Televisor(20, 34, true, decodificador);

let arregloTelevisore : Televisor[] = [televisor1, televisor2, televisor3]

console.log(televisor1.getCanal())
televisor1.setCanal(20)
televisor1.bajarVolumen();
televisor1.apagarTele();
console.log(televisor1);