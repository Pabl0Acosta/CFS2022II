export default class Telefono{
 private estaPrendido : boolean;
 private bateriaActual : number;
 protected color : string;

    public constructor(){
        this.estaPrendido = true;
        this.bateriaActual = 54;
        this.color = "blanco";
    }
    public mandarMensaje(){
        console.log("mandar mensaje..")
    }
    public hacerLlamada(){
        console.log("hacer llamada..")
    }
    public encender(){
        console.log("encender")
    }    
    public apagar(){
        console.log("apagar")
    }    
    private getcColor() {
        return this.color;
    }
}