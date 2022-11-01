import Telefono from './Telefono'   

export default class TelefonoConRadio  extends Telefono{

    private frecuenciaActual: number;
    public conexionInternet: boolean

    public constructor(frecuenciaActual: number, conexionInternet: boolean){
        super();
        this.frecuenciaActual = frecuenciaActual; 
        this.conexionInternet = conexionInternet;
    }

    public verfrecuenciaActual() {
        console.log("la frecuencia es " + this.frecuenciaActual + "MHz");
    }
    public subirfrecuenciaActual() {
        this.frecuenciaActual = this.frecuenciaActual +1;
    }
    public bajarfrecuenciaActual() {
        this.frecuenciaActual = this.frecuenciaActual -1;

    }
    public conectarInternet(){
        this.conexionInternet = true;
    }
    public desconectarInternet(){
        this.conexionInternet = false;
    }
}