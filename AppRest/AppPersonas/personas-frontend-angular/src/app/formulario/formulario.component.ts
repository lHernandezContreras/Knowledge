import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from './../persona-service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  idPersona: any;
  nombreInput: any;

  constructor(private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.idPersona = this.route.snapshot.params['idPersona'];
  console.log('recuperamos el parametro idPersona: ' + this.idPersona);
  if(this.idPersona != null){
    const persona = this.personaService.encontrarPersona(this.idPersona);
    if (persona != null){
      this.nombreInput = persona.nombre;
    }
  }
  }
onGuardarPersona(){
  const personaAGuardar = new Persona(this.idPersona, this.nombreInput);
  if(this.idPersona != null){
    this.personaService.modificarPersona(this.idPersona, personaAGuardar);
  }else{
  this.personaService.agregarPersona(personaAGuardar);
  }
  this.router.navigate(["personas"]);
}
onEliminarPersona(){
  if(this.idPersona != null){
    console.log('persona a elimninar: ' + this.idPersona);
    this.personaService.eliminarPersona(this.idPersona);
  }
  this.router.navigate(['personas']);
}
}
