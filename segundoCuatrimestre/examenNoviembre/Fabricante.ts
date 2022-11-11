export default class Fabricante{
    private nombreDelFabricante: string;

    constructor(nombreDelFabricante : string) {
        this.nombreDelFabricante = "nokia";
    }
    public setNombre() : string {
        return this.nombreDelFabricante;
    }
}
