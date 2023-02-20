//no importar especialidad porque Turno no la necesita, Medico si
import Medico from "./Medico"
import Paciente from "./Paciente"
import Horario from "./Horario"

export default class Turno {
    private num_turno: number;
    private medico: Medico;
    private paciente: Paciente;
    private horario: Horario;

    
    public constructor(num_turno: number, medico: Medico, paciente: Paciente, horario: Horario) {
        this.num_turno = num_turno;
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
    }
    
    public getNumTurno() : number {
        return this.num_turno;
    }
    public getMedico() : Medico {
        return this.medico;
    }
    public setMedico(nuevoNombre: Medico): void {
        this.medico = nuevoNombre;
    }
    public getPaciente() : Paciente {
        return this.paciente;
    }
    public setPaciente(nuevoPaciente: Paciente): void {
        this.paciente = nuevoPaciente;
    }





    

}