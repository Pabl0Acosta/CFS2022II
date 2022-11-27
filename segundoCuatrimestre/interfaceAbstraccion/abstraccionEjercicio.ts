abstract class Vehiculo {
    abstract getColor(): string;
    abstract getMarca(): string;
    abstract getCantidadPuertas(): number;
    
}

class Autociudad extends Vehiculo{
    public getColor(): string{
        return "blanco";
    }
    public getMarca(): string{
        return "fiat";
    }
    public getCantidadPuertas(): number{
        return 4;
    }
}

class AutoDeportivo extends Vehiculo{
    private cantidadEscapes: number;
    private colorCristales: string;
        public constructor(cantidadEscapes: number, colorCristales: string){
            super();
            this.cantidadEscapes = 4; 
            this.colorCristales = "negros";
        }

    public getColor(): string{
        return "rojo";
    }
    public getMarca(): string{
        return "Bugatti";
    }
    public getCantidadPuertas(): number{
        return 2;
    }
    public getCantidadEscapes(): number{
        return this.cantidadEscapes;
    }
    public getColorCristales(): string{
        return this.colorCristales;
    }
}

class Camioneta extends Vehiculo{
    private cantidadAsientos: number;
    private tieneCajaAbierta: boolean;

    public constructor(cantidadAsientos: number, tieneCajaAbierta: boolean){
        super();
        this.cantidadAsientos = 2; 
        this.tieneCajaAbierta = true;
    }
    
    public getColor(): string{
        return "azul";
    }
    public getMarca(): string{
        return "ford";
    }
    public getCantidadPuertas(): number{
        return 2;
    }
    public getCantidadAsientos(): number{
        return this.cantidadAsientos;
    }
    public taparCaja(): void{
        this.tieneCajaAbierta = false;
    }
    public destaparCaja(): void{
        this.tieneCajaAbierta = true;
    }
}