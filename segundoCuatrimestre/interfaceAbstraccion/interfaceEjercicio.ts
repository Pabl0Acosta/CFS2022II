interface Auto {
    acelerar(): void;
    frenar(): void;
}

class AutoCarrera implements Auto{
    private velocidadActual: number;

    public constructor(){
    this.velocidadActual = 50
    }

    public acelerar(): void {
        this.velocidadActual += 50
    }

    public frenar(): void {
        this.velocidadActual -= 50
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
}

class AutoFamiliar implements Auto{
    private cantidadPuertas: number;
    private marca: string;
    private color: string;
    private velocidadActual: number;

    public constructor(cantidadPuertas: number, marca: string, color: string){
        this.cantidadPuertas = 4;
        this.marca = "chevrolet";
        this.color = "rojo";
        this.velocidadActual = 30;
        }
    
        public acelerar(): void {
            this.velocidadActual += 40
        }
    
        public frenar(): void {
            this.velocidadActual -= 50
        }
    
        public getVelocidadActual(): number {
            return this.velocidadActual;
        }
        
        public getCantidadPuertas(): number{
            return this.cantidadPuertas;
        }
        
        public getMarca(): string{
            return this.marca;
        }

        public getColor(): string{
            return this.color;
        }
}