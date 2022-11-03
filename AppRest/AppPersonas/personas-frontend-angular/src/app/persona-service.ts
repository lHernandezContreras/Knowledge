import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Persona } from './persona.model';

@Injectable()
export class PersonaService {
  personas: Persona[] = [];

  constructor(private dataService: DataService) {}
  //se usa para llamar al valor del arreglo debido a la llamada asincrona
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }
  agregarPersona(persona: Persona) {
    console.log('persona a agregar: ' + persona.nombre);
    this.dataService.agregarPersona(persona)
    .subscribe(
      (persona: any) => {
      //recuperamos el objeto persona con el idpersona recien agragado
      console.log('se agregara al arreglo la persona recienc incertada suscribir: ' + persona.idPersona);
      this.personas.push(persona);
    });
  }
  encontrarPersona(id: number) {
    var persona: any = this.personas.find(
      (persona) => persona.idPersona == id
    );
    console.log('persona encontrada: ' + persona.idPersona + persona.nombre);
    return persona;
  }
  modificarPersona(id: Number, persona: Persona) {
    console.log('persona a modificar: ' + persona.idPersona);
    const personaModificadaLocal = this.personas.find(personas => persona.idPersona == id);
    if(personaModificadaLocal != undefined){
    personaModificadaLocal.idPersona = persona.idPersona;
    personaModificadaLocal.nombre =persona.nombre;
    }
    this.dataService.modificarPersona(id, persona);

  }
  eliminarPersona(id: Number) {
    console.log('eliminar persona con id: ' + id);
    const index = this.personas.findIndex((persona) => persona.idPersona == id);
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(id);
  }
}
