import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PersonasComponent},
  {path: "personas", component: PersonasComponent, children:[
    {path: "agregar", component: FormularioComponent },
    {path: ":idPersona", component: FormularioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
