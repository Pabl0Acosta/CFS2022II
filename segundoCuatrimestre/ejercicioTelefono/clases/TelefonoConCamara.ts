import Telefono from './Telefono'   

export default class TelefonoConCamara extends Telefono {
    private cantidadPixeles: number;

    public constructor(cantidadPixeles: number){
        super();
        this.cantidadPixeles = cantidadPixeles;
    }

    public sacarFotos(){
        console.log("sacando fotos... 'click!'")
    }
}